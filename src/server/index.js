var path = require('path')
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))
const dotenv = require('dotenv');
dotenv.config();
//credentials for API
// App ID :see .env file
// Api Key : see .env file
// End Point : https://api.aylien.com/api/v1
var aylien = require("aylien_textapi");
// set aylien API credentias
var textapi = new aylien({
    application_id: `${process.env.API_ID}`,
    application_key: `${process.env.API_KEY}`
});

// Log the app key
console.log(`Your API key is ${process.env.API_KEY}`);
console.log(__dirname)

// designates what port the app will listen to for incoming requests 
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

// Get info
app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// Post the url 

app.post("/article", (req, res) => {
    console.log(req.body);
    const { url } = req.body;
    console.log("Request TO endpoint /article ", url); // err empty response
    textapi.sentiment({ text: req.body.text }, (error, result, remaining) => {
        if (error === null) {
            console.log("Aylien Callback is ", result, remaining);
            res.send(JSON.stringify(result));
        } else {
            console.log(error);
        }
    });
});
module.exports = app;