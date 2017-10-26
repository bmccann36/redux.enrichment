import { connect } from 'react-redux';
import React, { Component } from 'react';


import { studentToDb } from '../reducers/students'

class createStudent extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const payload = {
      name: event.target.name.value,
      email: event.target.email.value,
      gpa: event.target.gpa.value,
      campusId: event.target.campus.value
    }
  this.props.studentToDb(payload)

  }

  render() {
    const campusNames = this.props.campuses.map(campus => {
      return <option key={campus.id} value={campus.id} > {campus.name} </option>
    })
    return (
      <form onSubmit = {this.handleSubmit} >
        <h1> add student </h1>
            <input placeholder= "name" type="text" name="name"  />
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
    campuses: state.campuses
  }
}

const mapDispatchToProps = { studentToDb }


export default connect(mapStateToProps, mapDispatchToProps)(createStudent)

