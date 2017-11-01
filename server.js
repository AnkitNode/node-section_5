const express = require('express');
const hbs = require('hbs');
var app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));
app.get('/about',(req, res)=> {
  //res.send("<h1>Hello world....!<h1>");
  res.render("about.hbs",{
    pageTitle : 'About page',

    currentTime: new Date().getFullYear()
    });
});
app.get('/',(req,res)=> {
  res.render("home.hbs",{
    pageTitle : 'About page',
    WelcomeMessage: 'Welcome to my Web Page',
    currentTime: new Date().getFullYear()
    });
});
app.get('/error',(req,res)=> {
  res.send({
    ErrorMessage: "The error haas occured"
  });
});
app.listen(3000, ()=>{
  console.log("Server started at port 3000");
});
