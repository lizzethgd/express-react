import React from 'react'
import PropTypes from 'prop-types'

const randomId = (n=6) => {
  const str =
    '0123456ABCDEFGHIJKLMNOPKRSTUVWXYZabcdefghihjklmnopqrstuvwxyz'
  let id = ''
  for (let i = 0; i < n; i++) {
    let index = Math.floor(Math.random() * str.length)
    id = id + str[index]
  }
  return id
}

const Add = props => {
   
  const handleSubmit = e => {
    e.preventDefault()
    const formData = {...props.formData, _id:randomId()}
    props.addStudent(formData)
    props.history.push('/students')
  }
    return (
        <div className='' >
         <h3>Add students</h3>
        
        <form onSubmit={handleSubmit}>
         
         <div className="form-group">
           <label htmlFor="firstName">First Name</label>
           <input
             id="firstName"
             type="text"
             name="firstName"
             value={props.formData.firstName}
             onChange={props.handleChange}
             placeholder="Firstname" />
         </div>

         <div className="form-group">
           <label htmlFor="lastName">Last Name</label>
           <input
             id="lastName"
             type="text"
             name="lastName"
             value={props.formData.lastName}
             onChange={props.handleChange}
             placeholder="Lastname" />
         </div>

         <div className="form-group">
           <label htmlFor="country">Country</label>
           <input 
             id="country" 
             type="text" 
             name="country" 
             value={props.formData.country}
             onChange={props.handleChange}
             placeholder="Country" />
         </div>
​
         <div className="form-group">
           <label htmlFor="age">Age</label>
           <input  
             id="age" 
             type="text"
             name="age" 
             value={props.formData.age}
             onChange={props.handleChange}
             placeholder="Age" />
         </div>
​
         <div className="form-group">
           <label htmlFor="skills">Skills</label>
           <textarea 
             id="skills"
             type="text" 
             name="skills" 
             cols="120" 
             rows="5"
             value={props.formData.skills}
             onChange={props.handleChange}
             placeholder="Skills separated by comma..."></textarea>
         </div>
         
         <div className="form-group">
           <label htmlFor="bio">Your bio</label>
           <textarea 
             id="bio"
             type="text" 
             name="bio" 
             cols="120" 
             rows="10"
             value={props.formData.bio}
             onChange={props.handleChange} 
             placeholder="Bio"></textarea>
         </div>
​
         <button className="button" type="submit" id="submit-button">Add</button> <a href="/students" className="button" role="button" aria-pressed="true">Cancel</a>
       </form>
        </div>
    )
}

Add.propTypes = {

}

export default Add
