const db = require('../db/models')
const Student = require('../db/models/students')
const Campus = require('../db/models/campuses')

const fillDb = function fillDb(){

  Campus.create({
    name: 'Ludus',
    image: "http://www.thinkgeek.com/images/products/additional/large/isvs_space_cat_take_off_dd.jpg"
  })
  Campus.create({
    name: 'Archaide',
    image: null
  })
  Campus.create({
    name: 'IOI inc',
    image: 'http://www.danspapers.com/wp-content/uploads/2017/07/ReadyPlayerOneTrailerStill-IOI.jpg'
  })
  Campus.create({
    name: 'neil degrasse tyson center for the astro-learned',
    image: 'http://mediad.publicbroadcasting.net/p/wamc/files/201704/neildegrassetyson.jpg'
  })
  Campus.create({
    name: 'ambiguous gas planet',
    image: 'https://www.wired.com/wp-content/uploads/2014/10/ut_interstellarOpener_f.png'
  })

// students
 Student.create({
  name: 'Aech',
  email: 'Aa@gmail',
  gpa: 3,
  campusId: 1
})
Student.create({
  name: 'Parzival',
  email: 'p@gmail.com',
  gpa: 2,
  campusId: 1
})
Student.create({
  name: 'Nolan Sorrento',
  email: 'n@yahoo.com',
  gpa: 4,
  campusId: 2
})
Student.create({
  name: 'Ogden Morrow',
  email: 'O@yahoo.com',
  gpa: 4,
  campusId: 2
})



}

module.exports = {fillDb}

