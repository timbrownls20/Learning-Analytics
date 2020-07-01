import React, { Component } from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
//import { deleteStudent } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      //deleteStudent: student => dispatch(deleteStudent(student))
    };
  }

  function mapStateToProps(state) {
    return {
      activeStudent: state.studentManagement.activeStudent //.slice(0, 10)
    };
  }

class Cohort extends Component {
  constructor(props) {
    super(props);
    //this.handleOver = this.handleOver.bind(this);
  }

  // handleOver(event) {
    
  //   //this.props.deleteStudent(this.props.student);
  //   //this.setState({ [event.target.id]: event.target.value });
  // }

  
//   componentDidMount() {
//     this.props.loadStudents();
//   }

  render() {
    return (<div className="row">
    <div className="col-6">
        <h2>Cohort</h2>
        <StudentList />
      </div>
    <div className="col-6">
    <h2>Student Details</h2>
    <StudentForm student={this.props.activeStudent} />
    </div>
  </div>
    );
  }
}



export default connect(
  mapStateToProps, //mapStateToProps,
  mapDispatchToProps
)(Cohort);