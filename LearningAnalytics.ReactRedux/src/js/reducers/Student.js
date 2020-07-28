import { ADD_STUDENT, UPDATE_STUDENT, LOAD_STUDENTS, DELETE_STUDENT, SELECT_STUDENT, UNSELECT_STUDENT } from "../constants/action-types";

const initialState = {
      activeStudent: {id: 0},
      students: []
};

function studentReducer(state = initialState, action) {
    if (action.type === ADD_STUDENT) {

      return Object.assign({}, state, {
        students: state.students.concat(action.payload),
        activeStudent:action.payload
        } 
      );
    }

    if (action.type === UPDATE_STUDENT) {

      var updatedStudents = state.students.map(item => {
        if(item.id === action.payload.id){
          item = action.payload;
        }
        return item;
      });

      return Object.assign({}, state, {
          students: updatedStudents,
          activeStudent:action.payload
      });
    }

    if (action.type === LOAD_STUDENTS) {
      
      return Object.assign({}, state, {
           students: action.payload
      });
    }

    if (action.type === DELETE_STUDENT) {
      return Object.assign({}, state, {
          students: state.students.filter(item => item.id !== action.payload.id),
          activeStudent: {id:0}
      });
    }

    if (action.type === SELECT_STUDENT) {
      return Object.assign({}, state, {
          activeStudent: action.payload
      });
    }

    if (action.type === UNSELECT_STUDENT) {
      return Object.assign({}, state, {
          activeStudent: {id:0}
      });
    }
    return state;
  };
  
  export default studentReducer;