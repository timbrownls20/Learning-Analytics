import React, { Component } from "react";
import { connect } from "react-redux";
import { loadStudents } from "../actions/index";

export class Students extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    return (
      <ul>
        {this.props.students.map(el => (
          <li key={el.id}>{el.firstName}</li>
        ))}
      </ul>
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
)(Students);