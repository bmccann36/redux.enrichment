import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store'

import CreateStudent from './CreateStudent'
import DeleteStudent from './DeleteStudent'
import EditStudent from './EditStudent'
import { fetchStudents } from '../reducers/students'
import { fetchCampuses } from '../reducers/campuses'

class RootView extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    const studentsThunk = fetchStudents()
    const campusesThunk = fetchCampuses()
    store.dispatch(studentsThunk)
    store.dispatch(campusesThunk)
  }

  render() {

    return (
      <div>
        <DeleteStudent />
        <CreateStudent />
        <EditStudent />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students
  }
}

export default connect(mapStateToProps)(RootView)




// {this.props.students.map(student => {
//   return (
//     <h1 key={student.id}> {student.name} </h1>
//   )
// })
// }
