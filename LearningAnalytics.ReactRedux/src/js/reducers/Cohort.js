import { LOAD_COHORTS, SELECT_COHORT } from "../constants/action-types";
//import initialState from './InitialState';

const initialState = {
    activeCohort: null,
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
          //...state.cohortManagement,
          activeCohort: action.payload
      });
    }

    return state;
  };
  
  export default cohortReducer;