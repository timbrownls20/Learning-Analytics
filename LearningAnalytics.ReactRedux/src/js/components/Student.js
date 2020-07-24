import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent, selectStudent } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      deleteStudent: student => dispatch(deleteStudent(student)),
      selectStudent: student => dispatch(selectStudent(student))
    };
  }

class Student extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleDelete(event) {
    this.props.deleteStudent(this.props.student);
  }

  handleSelect(event) {
    this.props.selectStudent(this.props.student);
  }

  
//   componentDidMount() {
//     this.props.loadStudents();
//   }

  render() {
    return (
        <div className="d-flex flex-row p-1 student" onClick={this.handleSelect}>
            <div>{this.props.student.firstName} {this.props.student.surname}</div>
            <span className="badge badge-secondary ml-3 ml-auto" onClick={this.handleDelete}>remove</span>
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
)(Student);