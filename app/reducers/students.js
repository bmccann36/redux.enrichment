import axios from 'axios'

// ACTION TYPES

const GET_STUDENTS = 'GET_STUDENTS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const EDIT_STUDENT = 'EDIT_STUDENT'


//ACTION CREATORS

export const loadStudents = (students) => {
  return { type: GET_STUDENTS, students: students }
}

export const createStudent = (newStudent) => {
  return { type: CREATE_STUDENT, student: newStudent}
}

export const deleteStudent = (id) => {
  return {type: DELETE_STUDENT, id: id}
}

export const editStudent = (newInfo) => {
  return { type: EDIT_STUDENT, newInfo: newInfo }
}


// THUNKs
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

export function studentToDb(studentInfo) {

  return function thunk(dispatch) {
    return axios.post('api/students', studentInfo )
    .then(res => res.data)
    .then(newStudent => {
      dispatch(createStudent(newStudent))
    })
  }
}

export function deleteStudentFromDb(id) {

  return function thunk(dispatch) {
    const action = deleteStudent(id)
    dispatch(action)
    return axios.delete(`/api/students/${id}`)
    .catch(err => console.error('delete did not work', err))
  }
}

export function editStudentInDb(id, payload){

  return function thunk(dispatch) {
    return axios.put(`/api/students/${id}`, payload)
    .then(res => res.data)
    .then(editedStudent => {
      dispatch(editStudent(editedStudent))
    })
  }
}


//REDUCER
export default function reducer(students = [], action) {
  switch (action.type) {

    case GET_STUDENTS:
      return  action.students

    case CREATE_STUDENT:
      return [...students, action.student]

    case DELETE_STUDENT:
      return students.filter( student => student.id !== action.id)

    case EDIT_STUDENT:
      return students.map(student => {
        return  action.newInfo.id === student.id ? action.newInfo : student
       })

    default: return students
  }
}




