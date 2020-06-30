import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudents } from "../actions/index";
import Student from "./Student";
import { CSSTransitionGroup } from 'react-transition-group' 

export class StudentList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <CSSTransitionGroup
          transitionName="student"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
        {this.props.students.map(student => (
          <Student key={student.id} student={student}/>
        ))}
        </CSSTransitionGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    students: state.students //.slice(0, 10)
  };
}

export default connect(
  mapStateToProps,
  { loadStudents }
)(StudentList);