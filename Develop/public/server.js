//Dependencies 
const express = require("express");
const fs = require("fs");
const path = require("path");

// set up express w/ two constants one for app and one for port
const app = express();
const PORT = process.env.PORT || 4000;

//Data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(__dirname));

//add routes 



app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
})