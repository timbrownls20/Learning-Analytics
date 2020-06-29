import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "./Form";
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
    return (<>
    <div>
      <h2>Add a new student</h2>
      <Form />
    </div>
    <div className="mt-3">
        <h2>Students</h2>
        <StudentList />
      </div>
    </>
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