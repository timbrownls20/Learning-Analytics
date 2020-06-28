import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addStudent: student => dispatch(addStudent(student))
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { firstName } = this.state;
    this.props.addStudent({ firstName, cohortId:1 });
    this.setState({ firstName: "" });
  }
  render() {
    const { firstName } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            value={firstName}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;