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
    application_id: "47a89415" /* process.env.API_ID */ ,
    application_key: "4a5240d830de6a73d51c510eecdcbb61" /* process.env.API_KEY */
});

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests 
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.get("/", (req, res) => res.sendFile("index.html"));

app.post("/article", (req, res) => {
    const { text } = req.body;
    console.log("Request TO endpoint /article ", text);
    textapi.sentiment({ url: text }, (error, result, remaining) => {
        if (error === null) {
            console.log("Aylien Callback is ", result, remaining);
            res.send(result);
        } else {
            console.log(error);
        }
    });
});

/* app.post("/article", (req, res) => {
    textapi.sentiment({ url: req.body }, function(error, response) {
        if (error === null) {
            console.log(response);
            res.send(result);
        }
    });
}); */