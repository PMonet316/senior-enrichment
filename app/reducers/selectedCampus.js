import axios from 'axios';


//ACTIONS

const SET_SELECTED_CAMPUS = 'SET_SELECTED_CAMPUS';

//ACTION CREATORS

const setSelectedCampus = (campus) => {
  return {
    type: SET_SELECTED_CAMPUS,
    campus
  }
}

//REDUCER

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_SELECTED_CAMPUS:
      return action.campus;
    default: return state;
  }
}

//DISPATCHERS(THUNKS)

export const fetchSelectedCampus = campusId => dispatch => {
  axios.get(`/api/campuses/${campusId}`)
  .then(res => res.data)
  .then(campus => dispatch(setSelectedCampus(campus)))
}

