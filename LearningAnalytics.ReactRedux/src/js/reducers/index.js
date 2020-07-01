import { ADD_STUDENT, LOAD_STUDENTS, DELETE_STUDENT, SELECT_STUDENT } from "../constants/action-types";

const initialState = {
    studentManagement: {
      activeStudent: null,
      students: []
    }
    
};
  
function rootReducer(state = initialState, action) {
  if (action.type === ADD_STUDENT) {

      return Object.assign({}, state, {
        studentManagement :{
          students: state.studentManagement.students.concat(action.payload)
        }
      });
    }

    if (action.type === LOAD_STUDENTS) {
      return Object.assign({}, state, {
        studentManagement :{
          students: action.payload
        }
      });
    }

    if (action.type === DELETE_STUDENT) {
      return Object.assign({}, state, {
        studentManagement :{
          students: state.studentManagement.students.filter(item => item.id !== action.payload.id)
        }
      });
    }

    if (action.type === SELECT_STUDENT) {
      var newState = Object.assign({}, state, {
        studentManagement :{
          ...state.studentManagement,
          activeStudent: state.studentManagement.activeStudent = action.payload
        }
      });

      return newState;
    }

    return state;
  };
  
  export default rootReducer;