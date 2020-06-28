
import { ADD_STUDENT, LOAD_STUDENTS } from "../constants/action-types";
import { ROOT_URL } from "../constants/application-config";


export function addStudent(payload) {

  return function(dispatch) {

    console.log(JSON.stringify(payload));

    return fetch(`${ROOT_URL}/student`,{
      method: 'POST',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
     },
     //mode: 'no-cors',
     body: JSON.stringify(payload)
     //body: JSON.stringify({"Id":3,"Registration":null,"FirstName":"William2","Surname":"Shakespeare","CohortId":1})
    })
      .then(response => response.json())
      .then(json => {
        dispatch({ type: ADD_STUDENT, payload: json });
      });
  };
  

  // return function(dispatch) {

  //   console.log(JSON.stringify(payload));

  //   return fetch("http://localhost:44358/api/student/test",{
  //     method: 'POST',
  //     headers: { 'Accept': 'application/json' },
  //     mode: 'no-cors',
  //     // We convert the React state to JSON and send it as the POST body
  //     body: "input"
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       dispatch({ type: ADD_STUDENT, payload: json });
  //     });
  // };

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


// export function getData() {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(json => {
//       return { type: "DATA_LOADED", payload: json };
//     });
// }