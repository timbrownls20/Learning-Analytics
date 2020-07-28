import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import { loadCohorts } from "../actions/index";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.props.loadCohorts();
  }
  
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="navbar-brand">Learning Analytics</div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <NavLink exact to='/' className="nav-link">Home</NavLink>
        <li className="nav-item dropdown">  
          <div className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Cohorts
          </div>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          {this.props.cohorts.map(cohort => (
            <NavLink key={cohort.id} exact to={`/Cohort/${cohort.id}`} className="dropdown-item">{cohort.displayName}</NavLink>
          ))}
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div className="p-5">
  {this.props.children}
  </div>
    </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCohorts: () => dispatch(loadCohorts())
  };
}

function mapStateToProps(state) {
  return {
    cohorts: state.cohortManagement.cohorts
  };
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Layout);

