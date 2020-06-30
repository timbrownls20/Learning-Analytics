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

class Cohort extends Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

//   handleClick(event) {
    
//     this.props.deleteStudent(this.props.student);
//     //this.setState({ [event.target.id]: event.target.value });
//   }

  
//   componentDidMount() {
//     this.props.loadStudents();
//   }

  render() {
    return (<div className="row">
    <div className="col-6">
        <h2>Students</h2>
        <StudentList />
      </div>
    <div className="col-6">
    <h2>Add a new student</h2>
    <StudentForm />
    </div>
  </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     students: state.students //.slice(0, 10)
//   };
// }

export default connect(
  null, //mapStateToProps,
  mapDispatchToProps
)(Cohort);