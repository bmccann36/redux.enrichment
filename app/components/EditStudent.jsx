import { connect } from 'react-redux';
import React, { Component } from 'react';


import { editStudentInDb } from '../reducers/students'

class editStudent extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const payload = {
      email: event.target.email.value,
      gpa: event.target.gpa.value,
      campusId: event.target.campus.value
    }

console.log(event.target.id.value)
  this.props.editStudentInDb(event.target.id.value, payload)

  }

  render() {
    const campusNames = this.props.campuses.map(campus => {
      return <option key={campus.id} value={campus.id} > {campus.name} </option>
    })
    return (
      <form onSubmit = {this.handleSubmit} >
        <h1> Edit student </h1>
            <input placeholder= "student id" type="number" name= "id"  />
            <input placeholder= "email" type= "text" name="email"  />
            <input placeholder= "gpa" type= "text" name="gpa"  />
              <select type="text" name="campus">
              <option value="" > select campus </option>
                {campusNames}
              </select>
            <button type="submit">
                submit
              </button>

        </form>
    )

  }
}


const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = { editStudentInDb }


export default connect(mapStateToProps, mapDispatchToProps)(editStudent)

