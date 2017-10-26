import axios from 'axios'

// ACTION TYPES

const GET_CAMPUSES = 'GET_CAMPUSES'


//ACTION CREATORS

export const loadCampuses = (campuses) => {
  return { type: GET_CAMPUSES, campuses: campuses }
}


// THUNK
export function fetchCampuses() {

  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = loadCampuses(campuses);
        dispatch(action);
      });
  }
}


//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return  action.campuses

    default: return state
  }
}




