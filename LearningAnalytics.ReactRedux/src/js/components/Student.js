import React, { Component } from "react";
import { connect } from "react-redux";
//import { loadStudents } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      //addStudent: student => dispatch(addStudent(student))
    };
  }

export class Student extends Component {
  constructor(props) {
    super(props);
  }


  
//   componentDidMount() {
//     this.props.loadStudents();
//   }

  render() {
    return (
        <li key={this.props.student.id}>{this.props.student.firstName}</li>
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
)(Student);