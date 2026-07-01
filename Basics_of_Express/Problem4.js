// Question 4: Product Information Portal

// Create route:/product/:id

// If user visits:/product/101

// Output:Product Details ,  Product ID : 101

// If user visits:/product/500

// Output:Product Details ,  Product ID : 500
// Concepts Practiced
// Dynamic Routing
// Template Literals
// req.params

const express = require('express');

productAPI = [ 
  {"id": 101,
  "title": "Iphone 16 pro max",
  "brand": "iphone",
  "category": "smart phone",
  "price": 149999
  } ,
  {"id": 102,
  "title": "samsung S24 ultra",
  "brand": "samsung",
  "category": "smartphone",
  "price": 179000
  } ,
  {"id": 103,
  "title": "Wireless Noise-Canceling Headphones",
  "brand": "SonicWave",
  "category": "Electronics",
  "price": 2999
  } ,
  {"id": 104,
  "title": " 6000V charger",
  "brand": "oppo",
  "category": "Electronics",
  "price": 999.99
  } ,
  {"id": 105,
  "title": "titan edge watch",
  "brand": "titan watches",
  "category": "wearable",
  "price": 17500
  } 

];

const app = express();

app.get('/product/:id' , (req , res) =>{
    if(req.params.id == 101){
        res.send(`<h1> Product Details </h1>
        <h3> Product ID : ${productAPI[0].id} </h3>
        <h3> Product Title : ${productAPI[0].title} </h3>
        <h3> Product Brand : ${productAPI[0].brand} </h3>
        <h3> Product Category : ${productAPI[0].category} </h3>
        <h3> Product Price : ${productAPI[0].price} </h3>`)
    }
    else if(req.params.id == 102){
         res.send(`<h1> Product Details </h1>
        <h3> Product ID : ${productAPI[1].id} </h3>
        <h3> Product Title : ${productAPI[1].title} </h3>
        <h3> Product Brand : ${productAPI[1].brand} </h3>
        <h3> Product Category : ${productAPI[1].category} </h3>
        <h3> Product Price : ${productAPI[1].price} </h3>`)
    }

    else if(req.params.id == 103){
         res.send(`<h1> Product Details </h1>
        <h3> Product ID : ${productAPI[2].id} </h3>
        <h3> Product Title : ${productAPI[2].title} </h3>
        <h3> Product Brand : ${productAPI[2].brand} </h3>
        <h3> Product Category : ${productAPI[2].category} </h3>
        <h3> Product Price : ${productAPI[2].price} </h3>`)
    }
    else if(req.params.id == 104){
         res.send(`<h1> Product Details </h1>
        <h3> Product ID : ${productAPI[3].id} </h3>
        <h3> Product Title : ${productAPI[3].title} </h3>
        <h3> Product Brand : ${productAPI[3].brand} </h3>
        <h3> Product Category : ${productAPI[3].category} </h3>
        <h3> Product Price : ${productAPI[3].price} </h3>`)
    }
    else if(req.params.id == 105){
         res.send(`<h1> Product Details </h1>
        <h3> Product ID : ${productAPI[4].id} </h3>
        <h3> Product Title : ${productAPI[4].title} </h3>
        <h3> Product Brand : ${productAPI[4].brand} </h3>
        <h3> Product Category : ${productAPI[4].category} </h3>
        <h3> Product Price : ${productAPI[4].price} </h3>`)
    }
    else{
        res.send(`<h1> Product Not available </h1>`)
    }
    }

        
    );

    app.listen(4001 , ()=>{
    console.log("server is running on port : http://localhost:4001/product:id");
    })