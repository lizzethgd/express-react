import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Details = props => {
    console.log(props)

const deleteStudent=() =>{
    const id = props.match.params.id
    const url = `http://localhost:3500/api/v.1.0/students/${id}/delete`
    axios.delete(url).then(response => {console.log('deleted')})
    props.history.push('/students')
    props.deleteStudent()
}

    if (props.students.length>0){
        const student= props.students.find(st => st._id===props.match.params.id)


    return (
        <div>
            <h3>{student.firstName} {student.lastName}</h3>
            <p>Age: {student.age}</p>
            <p>{student.country}</p>
            <p>{student.skills}</p>
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
