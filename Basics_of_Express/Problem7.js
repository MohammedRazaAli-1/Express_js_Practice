// Question 7: Student Result Page
// Send from backend:

// {
//    studentName:"Raza",
//    marks:85
// }
// Display on EJS page:
// Student Name : Raza
// Marks : 85

// Concepts Practiced
// Passing multiple variables
// EJS rendering

const express = require('express');
const path = require('path');
const myapp = express();

myapp.set('view engine' , 'ejs')
myapp.path('views' , path.join(__dirname , 'views'));

myapp.get('/' , (req , res) =>{
   res.render('problem7_view' , {name : "raza" , roll_no : 83})
})

myapp.listen('4000' , ()=>{
    console.log("server is running on port : http://localhost:4000")
})