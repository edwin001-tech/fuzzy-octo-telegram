const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";
    
    switch(currentDay){
        case 0:
            day = "Sunday";
            case 1:
            day = "Monday";
            case 2:
            day = "Tuesday";
            case 3:
            day = "Wednesday";
            case 4:
            day = "Thursday";
            case 5:
            day = "Friday";
            case 6:
            day = "Saturday";
            break;
            default:
                console.log("Error: Current day is "+ currentDay);

            
            
    } 

    res.render("list", {KindOfDay: day});
    
});

app.listen(3000, function(){
    console.log("server started at port 3000");
});
