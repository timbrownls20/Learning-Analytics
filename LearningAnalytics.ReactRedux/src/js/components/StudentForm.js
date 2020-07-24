import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/index";

function mapStateToProps(state) {
  return {
    //student: state.studentManagement.activeStudent 
  };
}


function mapDispatchToProps(dispatch) {
  return {
    addStudent: student => dispatch(addStudent(student))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    console.log("constructor");

    this.state = {
      id: 0,
      firstName: "",
      surname: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.student && nextProps.student.id !== this.state.id){
      this.setState({
        id: nextProps.student.id, 
        firstName: nextProps.student.firstName,
        surname: nextProps.student.surname || ""
      });
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName, surname } = this.state;
    this.props.addStudent({ firstName, surname, cohortId:1 });
    this.setState({ firstName: "", surname: "" });
  }
  render() {
    const { id, firstName, surname } = this.state;
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
        <button type="submit" className="btn btn-primary">SAVE</button>
      </form>
    );
  }
}

const StudentForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default StudentForm;