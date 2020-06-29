
import { ADD_STUDENT, LOAD_STUDENTS, DELETE_STUDENT } from "../constants/action-types";
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

export function loadStudents() {
  return function(dispatch) {
    return fetch(`${ROOT_URL}/student`)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_STUDENTS, payload: json });
      });
  };
}
