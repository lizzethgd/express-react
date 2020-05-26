import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Details = props => {
    console.log(props)
    if (props.students.length>0){
        const student= props.students.find(st => st._id==props.match.params.id)

       /* const deleteStudent=() =>{
            props.deleteStudent(student._id)
            props.history.push('/students')
          }*/

    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Age: {student.age}</p>
            <p>{student.country}</p>
            <p>{student.skills}</p>
            <p>{student.bio}</p>
            <div>
           <NavLink className="button" to={`/students/edit/${student._id}`}>Edit</NavLink> <button onClick={() => props.deleteStudent(student._id, props.history)}>Delete</button>
        </div>
        </div>
    )}
    return <h1>No data</h1>
}


Details.propTypes = {

}

export default Details
