const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');
const indexLocation = path.join(__dirname + "/frontend/")

// Animales.com
app.get('/', function(req, res) {
    res.sendFile(indexLocation)
})

// database stuff
function getVotes(){
    const contents = fs.readFileSync(path.join(__dirname, "./db/votes.json"));
    const obj = JSON.parse(contents);
    return obj.votes;
}

function updateVotes(){
    cat++;

    const contents = {"votes":cat}

    fs.writeFile(path.join(__dirname, "./db/votes.json"), JSON.stringify(contents), (err) => {
        if(err){
          return console.error(err)
        } 
        //resolve(content);
    });

    // const obj = JSON.parse(contents);
    // return obj.votes;

    console.log(cat);

}

// API code
let dog = 0;
let cat = getVotes();
let horse = 0;
let unicorn = 0;
let eagle = 0;

var routerCat = express.Router();
app.get('/api/cat', (req, res) => {

    //console.log(getVotes());  
    updateVotes();  

    //cat = getVotes();

    res.json(
        {message: cat}
    )
})

app.put('/api/cat', (req, res) => {

    //console.log(getVotes());    

    cat = getVotes();
    res.json(
        {message: cat}
    )
})

// var routerDog = express.Router();
// app.get('/api/dog', (req, res) => {
//     dog++;
//     res.json(
//         //[{message: dog}]
//         {message: dog}
//     )
// })
// app.post('/api/dog', (req, res) => res.json(
//     [{message: dog}]
// ))



// var routerHorse = express.Router();
// app.get('/api/horse', (req, res) => {
//     horse++;
//     res.json(
//     {message: horse}
// )
//     })

// var routerUnicorn = express.Router();
// app.get('/api/unicorn', (req, res) => {
//     unicorn++;
//     res.json(
//     {message: unicorn}
// // )

//     })


// var routerEagle = express.Router();
// app.get('/api/eagle', (req, res) => {
// eagle++;
// res.json(
//     {message: eagle++}
// )
// })

// var routerEagle = express.Router();
// app.get('/api/eagle', (req, res) => res.json(
//     [{message: eagle++}]
// ))

// Server start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))



// curl --location --request GET 'localhost:3000/api/dog'