const add = require('./src/Addition/addition.js');
const sub = require('./src/Subtraction/subtraction.js');
const division = require('./src/Division/division.js');
const multiplication = require('./src/Multiplication/multiplication.js');
const express = require('express');
const app = express();
const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
app.set('view engine', 'pug');

app.use(express.static(__dirname + '/views'));
app.get('/', (req, res) => {
    res.render('index', {
      title: 'Calculator'
    
    });
  });
// const http = require('http');
// const express = require('express');
// const app = express();
// const path = require('path');
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.get('/', (req, res) => {
//     res.sendFile('calc.html',
//         {
//             root: path.join(__dirname, './webpages')            
//         });
// });
// app.get("/")

// app.listen(1234);