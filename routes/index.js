const express = require('express')
const router = express.Router()

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Feedback app', author: 'Luis'})
})

router.get('/feedback-form', function(req, res, next){
    res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next){
    const formData = req.body

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        message: formData.comments,
        currentStudent: formData['current-student']
})
    })

module.exports = router
