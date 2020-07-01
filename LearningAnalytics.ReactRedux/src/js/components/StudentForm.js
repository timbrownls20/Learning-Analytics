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
    this.state = {
      id: 0,
      firstName: "" 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName } = this.state;
    this.props.addStudent({ firstName, cohortId:1 });
    this.setState({ firstName: "" });
  }
  render() {

    console.log('render student form');

    if(this.props.student && this.props.student.id !== this.state.id){
      this.setState({
        id: this.props.student.id, 
        firstName: this.props.student.firstName 
      });
    }
    
    const { id, firstName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          {/* <input type="hidden"
            id="id"
            value={id}            
          /> */}
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
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