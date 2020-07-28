import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent, updateStudent, deleteStudent } from "../actions/index";

class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      firstName: "",
      surname: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.isNew = this.isNew.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDelete(event) {
    const { id, firstName, surname } = this.state;
    this.props.deleteStudent({ id, firstName, surname, cohortId:1 });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { id, firstName, surname } = this.state;

    if(id === 0){
      this.props.addStudent({ id, firstName, surname, cohortId: this.props.cohortId });
    }
    else{
      this.props.updateStudent({ id, firstName, surname, cohortId:this.props.cohortId });
    }
  }

  static getDerivedStateFromProps (props, state) {

    if(props.student && props.student.id !== state.id){
      return {
        id: props.student.id || 0, 
        firstName: props.student.firstName || "",
        surname: props.student.surname || ""
      };
    }
    else{
      return null;
    }
  }

  render() {
    const { firstName, surname } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
            onChange={this.handleChange}
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            className="form-control"
            value={surname}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">{this.isNew() ? "Create": "Update"}</button>
        <button type="button" className={"btn btn-primary ml-2" + (this.isNew() ? " hidden" : "")} onClick={this.handleDelete}>Delete</button>
      </form>
    );
  }

  isNew(){
    return this.state.id === 0;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addStudent: student => dispatch(addStudent(student)),
    updateStudent: student => dispatch(updateStudent(student)),
    deleteStudent: student => dispatch(deleteStudent(student))
  };
}

function mapStateToProps(state) {
  return {
    cohortId: state.cohortManagement.activeCohort ? state.cohortManagement.activeCohort.id : 0 
  };
}

const StudentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default StudentForm;