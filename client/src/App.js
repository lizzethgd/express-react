import React from 'react'
import {BrowserRouter, Route, Switch, Redirect, withRouter} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Add from './components/Add'
import Students from './components/Students'
import Edit from './components/Edit'
import Layout from "./components/Layout"

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state={
    students:[],
    formData:{
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      skills: [],
      bio: ''
    }
  }
  render() {
    const { students,formData }= this.state
    return ( 
      <BrowserRouter>  
      <div className="App">
       <Layout >
           <Switch> 
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/students' component={() => <Students studetns={students} />} />
          <Route path='/students/add' component={Add} />
          <Route path='/students/edit' component={Edit} />
          </Switch> 
        </Layout>
        </div>
     </BrowserRouter>
     
   )
  }
}

export default App;
