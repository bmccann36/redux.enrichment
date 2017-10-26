import axios from 'axios'

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS'


//ACTION CREATORS

export const loadStudents = (students) => {
  return { type: GET_STUDENTS, students: students }
}


// THUNK
export function fetchStudents() {

  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = loadStudents(students);
        dispatch(action);
      });
  }
}


//REDUCER
export default function reducer(state = [], action) {
  switch (action.type) {

    case GET_STUDENTS:
      return  action.students

    default: return state
  }
}




