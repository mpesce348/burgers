//Dependencies
//========================================
const express = require('express');
const method_override = require('method-override');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");



//Set up Express
//========================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
//========================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Sets up Handlebars
//========================================
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Handles Method Override
//========================================
app.use(method_override('_method'));


//Routes
//========================================
app.use('/', routes);



//Connect to port
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
