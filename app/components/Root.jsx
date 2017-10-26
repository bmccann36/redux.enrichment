import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStudents } from '../reducers/students'
import store from '../store'

class RootView extends Component {
  constructor() {
    super()

  }

  componentDidMount() {
    const studentsThunk = fetchStudents()
    store.dispatch(studentsThunk)
  }

  render() {

    return (
      <div>
        {this.props.students.map(student => {
          return (
            <h1 key={student.id}> {student.name} </h1>
          )
        })
        }
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



