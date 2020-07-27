import { combineReducers } from 'redux';
import studentManagement from './Student';
import cohortManagement from './Cohort';

export default combineReducers({
  studentManagement,
  cohortManagement
});