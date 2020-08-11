const express= require('express')
const Router = express.Router()
const { getAllStudents, getSingleStudent, addStudent, editStudent, deleteStudent} = require('../controller/controllers')


Router.get('/api/v.1.0/students/', getAllStudents)

Router.get('/api/v.1.0/students/:id', getSingleStudent)

Router.post('/api/v.1.0/students/', addStudent)

Router.put('/api/v.1.0/students/:id/edit', editStudent)

Router.delete('/api/v.1.0/students/:id/delete', deleteStudent)

module.exports = Router