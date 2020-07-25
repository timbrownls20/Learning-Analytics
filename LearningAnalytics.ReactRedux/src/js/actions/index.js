
import { ADD_STUDENT, UPDATE_STUDENT, LOAD_STUDENTS, DELETE_STUDENT, SELECT_STUDENT, UNSELECT_STUDENT, LOAD_COHORTS, SELECT_COHORT } from "../constants/action-types";
import { ROOT_URL } from "../constants/application-config";


export function addStudent(payload) {

  return function(dispatch) {

    return fetch(`${ROOT_URL}/student`,{
      method: 'POST',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     },
     body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: ADD_STUDENT, payload: json });
      });
  };
}

export function updateStudent(payload) {

  return function(dispatch) {

    return fetch(`${ROOT_URL}/student/${payload.id}`,{
      method: 'PUT',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     },
     body: JSON.stringify(payload)
    }).then(response => {
      dispatch({ type: UPDATE_STUDENT, payload: payload });
    })
  };
}

export function deleteStudent(payload) {

  return function(dispatch) {

    return fetch(`${ROOT_URL}/student/${payload.id}`,{
      method: 'DELETE',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     }
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DELETE_STUDENT, payload: json });
      });
  };
}

export function loadStudents(cohortId) {
  return function(dispatch) {
    return fetch(`${ROOT_URL}/student/cohort/${cohortId}`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_STUDENTS, payload: json });
      });
  };
}

export function selectStudent(payload) {
  return { type: SELECT_STUDENT, payload };
}

export function unSelectStudent() {
  return { type: UNSELECT_STUDENT };
}

export function loadCohorts() {
  return function(dispatch) {
    return fetch(`${ROOT_URL}/cohort`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_COHORTS, payload: json });
      });
  };
}

export function selectCohort(payload) {
  //return { type: SELECT_COHORT, payload };

  console.log("payload");

  return function(dispatch) {

    return fetch(`${ROOT_URL}/cohort/${payload.id}`,{
      method: 'GET',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     }
     //body: JSON.stringify(payload)
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: SELECT_COHORT, payload: json });
      });
  };
}
