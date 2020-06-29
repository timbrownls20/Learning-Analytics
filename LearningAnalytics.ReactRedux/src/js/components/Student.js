import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteStudent } from "../actions/index";

function mapDispatchToProps(dispatch) {
    return {
      deleteStudent: student => dispatch(deleteStudent(student))
    };
  }

class Student extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    
    this.props.deleteStudent(this.props.student);
    //this.setState({ [event.target.id]: event.target.value });
  }

  
//   componentDidMount() {
//     this.props.loadStudents();
//   }

  render() {
    return (
        <div className="d-flex flex-row p-1" style={{width:'200px'}} key={this.props.student.id}>
            <div>{this.props.student.firstName}</div>
            <span class="badge badge-secondary ml-3 ml-auto" style={{cursor:'pointer'}} onClick={this.handleClick}>remove</span>
            {/* <div className="ml-3 ml-auto">X</div> */}
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