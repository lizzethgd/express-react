import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Add from './components/Add'
import Students from './components/Students'
import Details from './components/Details'
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
    },
    editing:false
  }

  handleChange= e =>{
    const {name, value} = e.target
    const formData = {...this.state.formData, [name]:value}
    this.setState({formData})
  }

  addStudent= student => {
    this.setState({students: [...this.state.students, student]})
  }

  editStudent= student => {
    this.setState({ editing: true})
  }

  updateStudent= (student, id) => {
    //const students = this.state.students.map(st => { st._id == id ? st=student : st=st })
    const students = this.state.students.map(st => {
    if (st._id == id) { return student } 
      return st 
    })
    this.setState({students, editing: false})
  }

  deleteStudent= (id, history) => {
    const students = this.state.students.filter(st => st._id != id)
      this.setState({students})
      history.push('/students')
  }


  render() {
    const { students,formData }= this.state
    console.log(this.state)
    return ( 
      <BrowserRouter>  
      <div className="App">
       <Layout >
           <Switch> 
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/students' component={() => <Students students={students} />} />
          <Route path='/students/add' render={props => <Add {...props} formData={formData} handleChange={this.handleChange} addStudent={this.addStudent} /> }  />
          <Route path='/students/edit/:id' render={props => <Edit {...props}  formData={formData}  handleChange={this.handleChange} updateStudent={this.updateStudent}  />}  /> 
          <Route path='/students/:id' component={props => <Details {...props} students={students} deleteStudent={this.deleteStudent}/>} />
          </Switch> 
        </Layout>
        </div>
     </BrowserRouter>
     
   )
  }
}

export default App;
