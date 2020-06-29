import { ADD_STUDENT, LOAD_STUDENTS, DELETE_STUDENT } from "../constants/action-types";

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
        //students: state.students.concat(action.payload)
        students: action.payload
      });
    }

    if (action.type === DELETE_STUDENT) {
      return Object.assign({}, state, {
        students: state.students.filter(item => item.id !== action.payload.id)
      });
    }

    return state;
  };
  
  export default rootReducer;