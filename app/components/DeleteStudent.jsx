import { connect } from 'react-redux';
import React, { Component } from 'react';


import { deleteStudentFromDb } from '../reducers/students'

class deleteStudent extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    const id = ev.target.studentSelect.value
    this.props.deleteStudentFromDb(+id)
  }

  render() {

    return (

      <form onSubmit={this.handleSubmit}>
        <h1> delete student </h1>
        <select type="text" placeholder="pick student" name="studentSelect">
          {this.props.students.map(student => {
            return <option key={student.id} value={student.id} > {student.name} </option>
          })}
        </select>
        <button type="submit"> submit </button>
      </form>
    )

  }
}


const mapStateToProps = function (state) {
  return {
    students: state.students
  }
}

const mapDispatchToProps = { deleteStudentFromDb }


export default connect(mapStateToProps, mapDispatchToProps)(deleteStudent)

