const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require("body-parser");

const productModel = require("./models/products");


const app = express();


//The middleware 
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/",(req,res)=>{

    res.render("home",{
        title:"Home Page"
    });

});


app.get("/contact-us",(req,res)=>{

    res.render("contactus",{
        title:"Contact Us Page"
    });

});



app.get("/products",(req,res)=>{

    


    res.render("product",{
        title:"Product Page",
        products : productModel.getallProducts()
    });

});

app.post("/products",(req,res)=>{

    //When the form is submitted
})



const PORT = process.env.PORT || 3000;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})