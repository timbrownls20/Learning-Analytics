import { LOAD_COHORTS, SELECT_COHORT } from "../constants/action-types";

const initialState = {
    activeCohort: {id:0},
    cohorts: []
};

function cohortReducer(state = initialState, action) {
    
    if (action.type === LOAD_COHORTS) {
      
      return Object.assign({}, state, {
          cohorts: action.payload
      });
    }

    if (action.type === SELECT_COHORT) {
      return Object.assign({}, state, {
          activeCohort: action.payload
      });
    }

    return state;
  };
  
  export default cohortReducer;