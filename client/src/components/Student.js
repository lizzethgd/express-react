import React from 'react'
import {NavLink} from 'react-router-dom'

const Student = props => {
    return (
        <div>
            <NavLink className="navlist"  to={`/students/${props.student._id}`} > 
            <p>{props.student.firstName} {props.student.lastName}</p>
            <p>Age: {props.student.age}</p>
            <p>{props.student.country}</p>
            <p>{props.student.skills}</p>
            </NavLink>
        </div>
    )
}

Student.propTypes = {

}

export default Student
