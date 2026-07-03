// Question 8: Company Website
// Create:
// views/company.ejs
// Send data:
// {
//  company:"TechSoft",
//  founder:"Raza"
// }
// Display both values in EJS.

// Concepts Practiced
// EJS
// Backend → Frontend Data

const express = require('express');
const path = require('path');

const app = express();

app.set('view engine' , 'ejs');
app.set('path', (path.join(__dirname , 'views')));

app.get('/' , (req ,res)=>{
    res.render('Problem8_view' , {"company" : "techsoft" , "founder" : "raza"});
})

app.listen('4200' , ()=>{
    console.log("server is running on port : http://localhost:4200");
})