import React, { Component } from "react";
import { connect } from "react-redux";
import { selectStudent } from "../actions/index";

class Student extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(event) {
    this.props.selectStudent(this.props.student);
  }

  render() {
    return (
        <div className={"d-flex flex-row p-1 student" + (this.isSelected() ? " selected" : "")} onClick={this.handleSelect}>
            <div>{this.props.student.firstName} {this.props.student.surname}</div>
        </div>
    );
  }

  isSelected() {
    return (this.props.activeStudent && this.props.activeStudent.id === this.props.student.id);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectStudent: student => dispatch(selectStudent(student))
  };
}
function mapStateToProps(state){
return {
  activeStudent: state.studentManagement.activeStudent
}
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Student);