const express = require('express')
const router = express.Router({mergeParams: true})
const Schema = require("../db/schema.js");

const StudentModel = Schema.StudentModel;

// /students/:studentId/projects
router.get('/', (request, response) => {

    const studentId = request.params.studentId

    StudentModel.findById(studentId)
    .then((student) => {
        response.render('project/index.hbs', {
            student: student
        })
        // find all students projects

        // display each project in a div
    })
    .catch((error) => {
        console.log(error)
    })

})

module.exports = router