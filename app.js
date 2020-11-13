const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get("/", function(req, res){
    // res.write("<h1>Hello this is localhost</h1>");
    // res.write("<h1>Hello this is localhost</h1>");
    // res.write("<p>Hello this is localhost</p>");

    res.sendFile(__dirname +"/index.html");
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});
