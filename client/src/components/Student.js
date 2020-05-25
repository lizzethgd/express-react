import React from 'react'
import PropTypes from 'prop-types'

const Student = props => {
    return (
        <div>
            <h4>FirstName LastName</h4>
            <p>Age: 25</p>
            <p>Finland, Helsinki</p>
            <p>HTML. CSS, JS</p>
        </div>
    )
}

Student.propTypes = {

}

export default Student
