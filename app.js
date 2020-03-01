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

let cat = getVotes();

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

// Server start
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
