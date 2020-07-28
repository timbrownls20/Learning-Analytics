import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudents, unSelectStudent } from "../actions/index";
import Student from "./Student";

export class StudentList extends Component {

  componentDidUpdate(prevProps, prevState) {
    if(this.props.cohortId !== prevProps.cohortId)
    {
      this.props.loadStudents(this.props.cohortId);
      this.props.unSelectStudent();
    }
  }

  render() {
    return (
        <div className="d-flex flex-column">
        {this.props.students.map(student => (
          <Student key={student.id} student={student}/>
        ))}
        <div className="d-flex flex-row pt-3">
          <button className="btn btn-outline-primary" onClick={this.props.unSelectStudent}>Add</button>
        </div>
      </div>
     
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents: cohortId => dispatch(loadStudents(cohortId)),
    unSelectStudent: () => dispatch(unSelectStudent())
  };
}

function mapStateToProps(state) {
  return {
    students: state.studentManagement.students,
    cohortId: state.cohortManagement.activeCohort ? state.cohortManagement.activeCohort.id : 0 
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);