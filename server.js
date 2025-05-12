const express = require('express') // Import express
const path = require('path') // Import path
const bodyParser = require('body-parser') // Import body-parser

const indexRouter = require('./routes/index') // Import index router

const app = express() // Create an express app

app.use(bodyParser.urlencoded({ extended: false })) 

const staticFileLocation = path.join(__dirname, 'public') 
app.use(express.static(staticFileLocation)) 

app.set('views', path.join(__dirname, 'views')) 
app.set('view engine', 'hbs')

app.use('/', indexRouter)

let server = app.listen(process.env.PORT || 3000, function() { // Start the server on port 3000 
    console.log('Express server running on port', server.address().port) // Log the port number
})