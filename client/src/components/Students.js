import React from 'react'
import Student from './Student'
import PropTypes from 'prop-types'

const Students = props => {
    return (
        <div>
            <p>Many students will be here</p>
            <Student />
            <Student />
            <Student />
            <Student />
        </div>
    )
}

Students.propTypes = {

}

export default Students
