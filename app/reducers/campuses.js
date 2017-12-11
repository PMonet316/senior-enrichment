import axios from 'axios';



//ACTIONS

const GET_CAMPUSES = 'GET_CAMPUSES';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';


//ACTION CREATORS


const getCampuses = (campuses) => {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

const removeCampus = (campusId) => {
  return {
    type: REMOVE_CAMPUS,
    campusId
  }
}

const createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus
  }
}

const updateCampus = campus => {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}


//REDUCER

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case REMOVE_CAMPUS:
      return [...state].filter(campus => {
        return campus.id !== +action.campusId
      });
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case UPDATE_CAMPUS:
      const filteredCampuses = [...state].filter(campus => {
        return campus.id !== Number(action.campus.id)
      });
      return [...filteredCampuses, action.campus]
    default: return state;
  }
}


//DISPATCHERS(THUNKS)


export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => res.data)
  .then(campuses => dispatch(getCampuses(campuses)))
  .catch(err => console.error(err));
}

export const deleteCampusThunk = campusId => dispatch => {
  dispatch(removeCampus(campusId))
  axios.delete(`/api/campuses/${campusId}`)
  .then(res => console.log('response from delete', res))
  .catch(err => console.error(err))
}

export const createCampusThunk = (name, imageUrl, description) => dispatch => {
  axios.post(`/api/campuses`, {
    name,
    imageUrl,
    description
  })
  .then(campus => dispatch(createCampus(campus)))
  .catch(err => console.error(err))
}

export const updateCampusThunk = campus => dispatch => {
  axios.put(`/api/campuses/${campus.id}`, campus)
  .then(updatedCampus => dispatch(updateCampus(updatedCampus)))
  .catch(err => console.error(err));
}
