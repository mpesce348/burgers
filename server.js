var express = require("express");
var mysql = require("mysql");
var app = express();
var bodyParser = require("body-parser")
var exphbs = require("express-handlebars");


var port = 8080;

app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");