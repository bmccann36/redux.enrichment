
const express = require('express');
const router = new express.Router();
module.exports = router;   // this is key ****
const models = require('../../db/models')
const Campus = models.Campus
const Student = models.Student


// GET all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
})

//  find all students who belongs to a campus
// full route - - localhost:1337/api/campuses/<id>
// return all students whose campusId is < ?>
router.get('/:campusId/students', (req, res, next) => {
  console.log(req.params.campusId, 'HERE')
  Student.findAll({
    where: { campusId: req.params.campusId }
  })
  .then(student => {res.send(student)})
})


// GET a single campus by id
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => res.json(campus))
})


//POST a new campus
router.post('/add',  (req, res, next) => {
  Campus.create({
      name: req.body.name,
      image: req.body.image,
  })
  .then(campus => res.json(campus))
})

// PUT update campus info for one
router.put('/:campusId/edit', (req, res, next) => {
  console.log(req.body)
  Campus.findById(req.params.campusId)
  .then(campus => {
    campus.update(req.body)
    res.json(campus)
   })
})

// DELETE a campus
router.delete('/:campusId/delete', (req, res, next) => {
  // res.send('here')
  Campus.findById(req.params.campusId)
  .then(campus => {
    res.send(campus.destroy())
  })
})
