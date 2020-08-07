import React, { Component } from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { selectCohort } from "../actions/index";

class Cohort extends Component {
  constructor(props) {
    super(props);
    
    this.props.selectCohort({id:this.props.match.params.id})
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.match.params.id !== prevProps.match.params.id)
    {
        this.props.selectCohort({id:this.props.match.params.id});
    }
  }

  render() {
    return (
    <>
    <h2>Cohort {this.props.activeCohort ? this.props.activeCohort.displayName : ""}</h2>
    <div className="row">
    <div className="col-6">
        <StudentList />
      </div>
    <div className="col-6">
    <StudentForm student={this.props.activeStudent} />
    </div>
  </div>
  </>
    );
  }
}

function mapStateToProps(state) {
  return {
    activeStudent: state.studentManagement.activeStudent,
    activeCohort: state.cohortManagement.activeCohort,
  };
}

function mapDispatchToProps(dispatch){

  return{
    selectCohort: cohort => dispatch(selectCohort(cohort))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Cohort);