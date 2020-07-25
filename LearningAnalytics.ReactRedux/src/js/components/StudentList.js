import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudents, unSelectStudent } from "../actions/index";
import Student from "./Student";
import { CSSTransitionGroup } from 'react-transition-group'

export class StudentList extends Component {
  // constructor(props) {
  //   super(props);
  // }


  // componentDidMount() {
  //   this.props.loadStudents(this.props.cohortId);
  //   this.props.unSelectStudent();
  // }

  componentWillReceiveProps(nextProps) {
    
    if(nextProps.cohortId !== this.props.cohortId)
    {
      this.props.loadStudents(nextProps.cohortId);
      this.props.unSelectStudent();
    }
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