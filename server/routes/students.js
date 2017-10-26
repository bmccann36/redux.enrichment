
const express = require('express');
const router = new express.Router();
module.exports = router;   // this is key ****
const models = require('../../db/models')
const Student = models.Student
const Campus = models.Campus

// router.get('/', (req, res) => res.send('you got the students route'))


// return all students
router.get('/', (req, res, next) => {
  Student.findAll({include: Campus})
  .then(students => res.json(students))
  // .then(res.send.bind(res))
  .catch(next)
})
// PUT - update student info
router.put('/:studentId', (req, res, next) => {
  // console.log(req.body)
  Student.findById(req.params.studentId)
  .then(student => {
    student.update(req.body)
    res.json(student)
   })

  // res.send('here')
})

// return a student  by id
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => { res.json(student) })
})


// INCLUDE!! find a student and see the campus they are associated with
router.get('/:studentId/campus', (req, res, next) => {
  Student.findById(req.params.studentId, {include: [Campus]})
  .then(student => {
    res.json(student)
  })
})

// POST add new student
router.post('/',  (req, res, next) => {
  console.log(req.body)
  Student.create({
      name: req.body.name,
      email: req.body.email,
      gpa: req.body.gpa,
      campusId: req.body.campusId

  })
  .then(student => {res.json(student)})
  // res.send('comin back')
})


// delete a student
router.delete('/:studentId', (req, res, next) =>{
  console.log(req.params.studentId)
  Student.findById(req.params.studentId)
  .then( student =>  {
     res.send(student.destroy())
  })
  // res.send(student))
})

