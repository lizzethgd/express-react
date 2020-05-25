import React from 'react'
import PropTypes from 'prop-types'

const Add = props => {
    return (
        <div className='' >
         <h3>Add students</h3>
             <form >
         
         <div className="form-group">
           <label for="firstName">First Name</label>
           <input
             id="firstName"
             type="text"
             name="firstName"
             placeholder="First name" />
​
         </div>
         <div className="form-group">
           <label for="lastName">Last Name</label>
           <input
             id="lastName"
             type="text"
             name="lastName"
             placeholder="Last name" />
​
         </div>
         <div className="form-group">
           <label htmlFor="country">Country</label>
           <input id="country" type="text" name="country" placeholder="Country" />
​
         </div>
​
         <div className="form-group">
           <label htmlFor="age">Age</label>
           <input type="text" id="age" name="age" placeholder="Age" />
​
         </div>
​
         <div className="form-group">
           <label htmlFor="skills">Skills</label>
           <textarea type="text" id="skills" name="skills" cols="120" rows="5"
             value="Skills separated by comma..."></textarea>
​
         </div>
         
         <div className="form-group">
           <label htmlFor="bio">Your bio</label>
           <textarea id="bio" name="bio" cols="120" rows="10" placeholder="Bio"></textarea>
         </div>
​
​
         <button className="button" type="submit" id="submit-button">Add</button> <a href="/students" class="button" role="button" aria-pressed="true">Cancel</a>
       </form>
        </div>
    )
}

Add.propTypes = {

}

export default Add
