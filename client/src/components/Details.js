/*
import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'


const StudentDetail = props => {
    console.log(props)
  const deleteStudent = () => {
    const id = props.match.params.id
    const url = `/api/v.1.0/students/${id}/delete`
    axios.delete(url).then(response => {
      console.log('deleted')
    })
    props.history.push('/students')
    props.deleteStudent()
  }

  let renderContent

  if (props.students.length > 0) {
    const student = props.students.find(st => st._id == props.match.params.id)
    console.log(student)
    renderContent = (
      <div className='single-student'>
        <h4>
          {student.firstName} {student.lastName}
        </h4>
        <p>{student.age}</p>
        <p>{student.country}</p>
        <p>{student.skills.join(', ')}</p>
        <p className='bio'>{student.bio}</p>
        <div>
          <div className='icons'>
            <NavLink
              to={`/students/edit/${student._id}`}
              className='button'
            >
             
            </NavLink>

            <button
              className='button'
              onClick={deleteStudent}
            ></button>
          </div>
        </div>
      </div>
    )
  } else {
    renderContent = <h1>No data</h1>
  }

  return (
    <>
      <main>
        <div className='main-wrapper'>{renderContent}</div>
      </main>
    </>
  )
}

StudentDetail.propTypes = {}

export default StudentDetail
*/

import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'

const Details = props => {

    const deleteStudent=() =>{
        const id = props.match.params.id
        const url = `/api/v.1.0/students/${id}/delete`
        axios.delete(url).then(response => {console.log('deleted by detailspage')})
        props.deleteStudent()
        props.history.push('/students')
    }

    if (props.students.length>0){
        const student= props.students.find(st => st._id===props.match.params.id)

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Age: {student.age}</p>
            <p>{student.country}</p>
            <p>{student.skills.join(', ')}</p>
            <p>{student.bio}</p>
            <div>
           <NavLink className="button" to={`/students/edit/${student._id}`}>Edit</NavLink> <button onClick={deleteStudent}>Delete</button>
        </div>
        </div>
    )}
    return <h1>No data</h1>
}


Details.propTypes = {

}

export default Details

