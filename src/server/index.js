var path = require('path')
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
dotenv.config();
//credentials for API
// App ID :see cashKeys file
// Api Key : see cashKeys file
// End Point : https://api.aylien.com/api/v1
var aylien = require("aylien_textapi");
// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests 
app.listen(8080, function() {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/article", (req, res) => {
    const { text } = req.body;
    console.log("this is the text aaaaaaaaaaaaaaaaaaaaaa :" + req.body);
    console.log("Request to '/article' endpoint", text);
    textapi.sentiment({ url: text }, (error, result, remaining) => {
        console.log("Aylien Callback", result, remaining);
        res.send(result);
    });
});