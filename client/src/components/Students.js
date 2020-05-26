import React from 'react'
import Student from './Student'

import PropTypes from 'prop-types'

const Students = props => {
    if (props.students.length>0){
    const studentList= props.students.map((student, i)=>  <Student key={i} student={student} />)
    return (
        <div>
           {studentList} 
        </div>
    )
}
return <h1>No data</h1>
}


Students.propTypes = {

}

export default Students
