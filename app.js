const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const indexLocation = path.join(__dirname + "/frontend/")

// Animales.com
app.get('/', function(req, res) {
    res.sendFile(indexLocation)
})

// API code
let dog = 0;
let cat = 0;
let horse = 0;
let unicorn = 0;
let eagle = 0;

var routerDog = express.Router();
app.get('/api/dog', (req, res) => {
    dog++;
    res.json(
        //[{message: dog}]
        {message: dog}

    )
})

app.post('/api/dog', (req, res) => res.json(
    [{message: dog}]
))

var routerCat = express.Router();
app.get('/api/cat', (req, res) => res.json(
    [{message: cat++}]
))

var routerHorse = express.Router();
app.get('/api/horse', (req, res) => res.json(
    [{message: horse++}]
))

var routerUnicorn = express.Router();
app.get('/api/unicorn', (req, res) => res.json(
    [{message: unicorn++}]
))

var routerEagle = express.Router();
app.get('/api/eagle', (req, res) => res.json(
    [{message: eagle++}]
))

// Server start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// curl --location --request GET 'localhost:3000/api/dog'