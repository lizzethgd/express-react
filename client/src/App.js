import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Add from './components/Add'
import Students from './components/Students'
import Details from './components/Details'
import Edit from './components/Edit'
import Spinner from './components/Spinner'
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
    },
    editing:false,
    errors: {}
  }
  
  componentDidMount(){
    this.fetchData()
   }

  fetchData = () => {
    const url = '/api/v.1.0/students'
    axios.get(url).then(response => {
      console.log(response.data)
      this.setState({ students: response.data})
      console.log(this.state)
      console.log('fetched')
    })
    .catch(err => {
      console.log(err.response.data)
      this.setState({ errors : err.response.data })
    })
  }

  handleChange= e =>{
    const {name, value} = e.target
    const formData = {...this.state.formData, [name]:value}
    this.setState({formData})
  }

  addStudent= () => {
    this.fetchData()
    const formData = {
      firstName: '',
      lastName: '',
      age: '',
      country: '',
      skills: '',
      bio: ''
    }
    this.setState({ formData })
  }

  editStudent= student => {
    this.setState({ editing: true})
  }

  updateStudent= () => {
    this.fetchData()
    console.log('uptated')
    this.setState({ editing: false})
  }

  deleteStudent= () => {
    this.fetchData()
  }

  render() {
    //console.log(this.state)
    const { students,formData }= this.state
    return ( 
      <BrowserRouter>  
      <div className="App">
       <Layout >
           <Switch> 
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/spinner' component={Spinner} />
          <Route exact path='/students' component={() => <Students students={students} />} />
          <Route path='/students/add' render={props => <Add {...props} formData={formData} handleChange={this.handleChange} addStudent={this.addStudent} /> }  />
          <Route path='/students/edit/:id' render={props => <Edit {...props} students={students} formData={formData}  handleChange={this.handleChange} addStudent={this.addStudent} updateStudent={this.updateStudent}  />}  /> 
          <Route path='/students/:id' component={props => <Details {...props} students={students} deleteStudent={this.deleteStudent} editing={this.editStudent}/> } />
          </Switch> 
        </Layout>
        </div>
     </BrowserRouter>
     
   )
  }
}

export default App;
