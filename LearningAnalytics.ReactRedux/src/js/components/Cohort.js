import React, { Component } from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { selectCohort } from "../actions/index";


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

class Cohort extends Component {
  constructor(props) {
    super(props);
    this.props.selectCohort({id:this.props.match.params.id})
  }

  // componentDidMount(){
  //   this.props.selectCohort({id:this.props.match.params.id})
  // }

  componentWillReceiveProps(nextProps) {
    
    if(nextProps.match.params.id !== this.props.match.params.id)
    {
        this.props.selectCohort({id:nextProps.match.params.id});
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

export default connect(
  mapStateToProps,
  mapDispatchToProps 
)(Cohort);