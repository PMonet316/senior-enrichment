/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux';
import campuses from './campuses';
import students from './students';
import selectedCampus from './selectedCampus';
import selectedStudent from './selectedStudent'





let rootReducer = combineReducers({
  campuses,
  students,
  selectedCampus,
  selectedStudent
})


export default rootReducer
