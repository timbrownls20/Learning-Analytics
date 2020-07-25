import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudents, unSelectStudent } from "../actions/index";
import Student from "./Student";
import { CSSTransitionGroup } from 'react-transition-group'

export class StudentList extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.loadStudents();
    this.props.unSelectStudent();
  }

  render() {
    return (
      <>

      <div className="d-flex flex-column">
      <div className="d-flex flex-row p-1">
      <button className="btn btn-primary ml-auto" onClick={this.props.unSelectStudent}>ADD</button>
      </div>
        <CSSTransitionGroup
          transitionName="student"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {this.props.students.map(student => (
          <Student key={student.id} student={student}/>
        ))}
        </CSSTransitionGroup>
      </div>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents: () => dispatch(loadStudents()),
    unSelectStudent: () => dispatch(unSelectStudent())
  };
}


function mapStateToProps(state) {
  return {
    students: state.studentManagement.students
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);