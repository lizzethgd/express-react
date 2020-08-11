const Student = require('../models/Student')

const getAllStudents = (req,res) => {
    Student.find({}, (err, students)=> {
        if (err) return res.status(404).send(err.response)
        res.json(students)
        })
}

const getSingleStudent = (req,res) => {
    const id= req.params.id
    Student.findOne({_id: id}, (err, student)=> {
        if (err) return res.status(404).send(err.response)
        res.json(student)
      })
}

const addStudent = (req, res) => {
    req.body.skills = req.body.skills.split(',')
    const newStudent = new Student(req.body)

    newStudent.save(err => {
        if (err) return res.status(404).send('add error in controller: '+err.response)
        console.log('added by controller')
        //res.redirect('/students')
      })
}

const editStudent = (req, res) => {
    const id = req.params.id
    const { firstName, lastName, age, country, bio, skills } = req.body
    Student.findOne({ _id: id }, (err, student) => {
      if (err) return res.status(404).send('find error in edit controller: '+err.response)
      student.firstName = firstName
      student.lastName = lastName
      student.age = age
      student.country = country
      student.skills = skills
      student.bio = bio
  
      student.save(err => {
        if (err) return res.status(404).send('save edit error in controller: '+err.response)
        console.log('edited by controller')
        //res.redirect(`/api/v.1.0/students/${id}`)
      })
    })
}

const deleteStudent = (req, res) => {
    const id= req.params.id
    
    Student.deleteOne({ _id: id }, (err, student) => {
        if (err) return res.status(404).send('delete error in controller: '+err.response)
        console.log('deleted by controller')
        //res.redirect('/students')
      })
}

module.exports = {
    getAllStudents:getAllStudents,
    getSingleStudent:getSingleStudent,
    addStudent:addStudent,
    editStudent:editStudent,
    deleteStudent:deleteStudent
}