import { ADD_STUDENT, LOAD_STUDENTS } from "../constants/action-types";

const initialState = {
    students: []
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_STUDENT) {

        return Object.assign({}, state, {
          students: state.students.concat(action.payload)
        });
      }

      if (action.type === LOAD_STUDENTS) {
        return Object.assign({}, state, {
          students: state.students.concat(action.payload)
        });
      }

      return state;
  };
  
  export default rootReducer;