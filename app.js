const express = require("express");
const exphbs  = require('express-handlebars');
const bodyParser = require("body-parser");


const app = express();


//The middleware 
app.use(express.static("public"));


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.get("/",(req,res)=>{

    res.render("home.handlebars",{
        title:"Home Page"
    });

});


app.get("/contact-us",(req,res)=>{

    res.render("contactus.handlebars",{
        title:"Contact Us Page"
    });

});



app.get("/products",(req,res)=>{

    res.render("product.handlebars",{
        title:"Product Page"
    });

});

app.post("/products",(req,res)=>{

    //When the form is submitted
})



const PORT = 3000;
app.listen(PORT , ()=>{

    console.log(`Web Server is up and running`);
})