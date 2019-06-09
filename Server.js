const path = require('path');
const express = require("express");
 
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = new express();
 
mongoose.connect('mongodb://localhost:27017/Deepak-blog', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))
    
    app.use(express.static("public"));
 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, ''));
    });
 
    app.listen(5000, () => {
        console.log("App listening on port 5000");
      });   