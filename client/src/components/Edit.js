import React from 'react';
import axios from 'axios'

class Edit extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    age: '',
    country: '',
    skills: [],
    bio: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    const url = `/api/v.1.0/students/${id}`
    axios.get(url).then(response => {
      console.log(response.data)
      const {firstName, lastName, age, country, skills, bio } =  response.data
      this.setState({firstName, lastName, age, country, skills, bio});
    }).catch(err => console.log(err.response))
  }

    handleChange= e =>{
      const {name, value} = e.target
      this.setState({[name]:value})
    }
 

    

    handleSubmit = e => {
        e.preventDefault()
        
        const checkType = Array.isArray(this.state.skills)
        const skills = checkType ? this.state.skills : this.state.skills.split(', ')
        const formData = {...this.state, skills}  
        console.log(formData) 
        
        const id = this.props.match.params.id
        const url = `/api/v.1.0/students/${id}/edit`
        axios.put(url, formData)
         .then(response => {console.log(response.data)
        })
        .catch(err => {console.log(err.response)})

        const redirectTo = () =>{
          this.props.history.push(`/students/${id}`)
        }

        this.props.updateStudent()
        //window.location.href = './Home';
        this.props.history.push('/spinner')
        setTimeout(redirectTo, 5000)
      }

  
    render() {
        return (
            <div className='' >
             <h3>Edit student</h3>
            
            <form onSubmit={this.handleSubmit}>
             
             <div className="form-group">
               <label htmlFor="firstName">First Name</label>
               <input
                 id="firstName"
                 type="text"
                 name="firstName"
                 value={this.state.firstName}
                 onChange={this.handleChange}
                 placeholder="Firstname" />
             </div>
    
             <div className="form-group">
               <label htmlFor="lastName">Last Name</label>
               <input
                 id="lastName"
                 type="text"
                 name="lastName"
                 value={this.state.lastName}
                 onChange={this.handleChange}
                 placeholder="Lastname" />
             </div>
    
             <div className="form-group">
               <label htmlFor="country">Country</label>
               <input 
                 id="country" 
                 type="text" 
                 name="country" 
                 value={this.state.country}
                 onChange={this.handleChange}
                 placeholder="Country" />
             </div>
    ​
             <div className="form-group">
               <label htmlFor="age">Age</label>
               <input  
                 id="age" 
                 type="text"
                 name="age" 
                 value={this.state.age}
                 onChange={this.handleChange}
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
                 rows="3"
                 value={this.state.skills}
                 onChange={this.handleChange}
                 placeholder="Skills separated by comma..."></textarea>
             </div>
             
             <div className="form-group">
               <label htmlFor="bio">Your bio</label>
               <textarea 
                 id="bio"
                 type="text" 
                 name="bio" 
                 cols="120" 
                 rows="4"
                 value={this.state.bio}
                 onChange={this.handleChange} 
                 placeholder="Bio"></textarea>
             </div>
    ​
             <button className="button" type="submit" id="submit-button">Edit</button> <a href="/students" className="button" role="button" aria-pressed="true">Cancel</a>
           </form>
            </div>
        )
}
}

Edit.propTypes = {
}


export default Edit
