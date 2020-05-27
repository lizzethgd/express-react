import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

class Edit extends React.Component {
  componentDidMount(){
    const url = 'http://localhost:3500/api/v.1.0/students'
    axios.get(url).then(response => {
      const id= this.props.match.params.id
      const student = response.data.find(st => st._id === id)
      this.props.updateStudent(student)
    })
    
  }
    handleSubmit = e => {
      e.preventDefault()
      const id= this.props.match.params.id
      const formData = {...this.props.formData}  
      const url = `http://localhost:3500/api/v.1.0/students/${id}/edit`
    axios.put(url, formData).then(response => {console.log('edited')})
    this.props.updateStudent( formData, id)
    this.props.history.push('/students')    
}

  render(){
    console.log(this.props)
    return (
        <div className='' >
        <h3>Edit students</h3>
         
         <form onSubmit={this.handleSubmit}>
         <div className="form-group">
           <label htmlFor="firstName">First Name</label>
           <input
             id="firstName"
             type="text"
             name="firstName"
             value={this.props.formData.firstName}
             onChange={this.props.handleChange}
             placeholder="Firstname" />
         </div>

         <div className="form-group">
           <label htmlFor="lastName">Last Name</label>
           <input
             id="lastName"
             type="text"
             name="lastName"
             value={this.props.formData.lastName}
             onChange={this.props.handleChange}
             placeholder="Lastname" />
         </div>

         <div className="form-group">
           <label htmlFor="country">Country</label>
           <input 
             id="country" 
             type="text" 
             name="country" 
             value={this.props.formData.country}
             onChange={this.props.handleChange}
             placeholder="Country" />
         </div>
​
         <div className="form-group">
           <label htmlFor="age">Age</label>
           <input  
             id="age" 
             type="text"
             name="age" 
             value={this.props.formData.age}
             onChange={this.props.handleChange}
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
             value={this.props.formData.skills}
             onChange={this.props.handleChange}
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
             value={this.props.formData.bio}
             onChange={this.props.handleChange} 
             placeholder="Bio"></textarea>
         </div>
​
​
​
<button className="button" type="submit" id="submit-button">Update</button> <a href="/students" className="button" role="button" aria-pressed="true">Cancel</a>
       </form>
        </div>
    )
}
}

Edit.propTypes = {

}

export default Edit
