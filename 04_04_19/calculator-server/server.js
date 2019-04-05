var add = require('./src/Addition/addition.js');
var sub = require('./src/Subtraction/subtraction.js');
var division = require('./src/Division/division.js');
var multiplication = require('./src/Multiplication/multiplication.js');
const express = require('express');
const path = require("path")
const app = express();
const queryString = require('querystring');
// const server = app.listen(7000, () => {
//   console.log(`Express running → PORT ${server.address().port}`);
// });
// app.set('view engine', 'pug');
// app.set("views", path.join(__dirname, "views"));
// app.use(express.static(__dirname + '/views'));
// app.get('/', (req, res) => {
//     res.render('index', {
//       title: 'Calculator'

//     });

//     first_number = req.first_number
//   });
const http = require('http');
// const express = require('express');
// const app = express();
// const path = require('path');
// var bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.sendFile('calc.html',
    {
      root: path.join(__dirname, './webpages')
    });
});

app.get('/details', (req, res) => {
  // console.log(req.query);
  console.log(req.query.first_number)
  var result
  let first_number = req.query.first_number;
  let second_number = req.query.second_number;
  let operation = req.query.Operation;
  //console.log(operation)
  if (operation == 'addition') {
    var addition = add(first_number, second_number)
    //res.send(addition)
    res.write('<html><head><title>Calculator</title></head><body>Addition is: '+addition+'</body></html>')
  } else if (operation == 'subtraction') {
    subtraction = sub(first_number, second_number);
    res.write('<html><head><title>Calculator</title></head><body>subtraction is: '+subtraction+'</body></html>')
  } else if (operation == 'multiplication') {
    multiplication = multiplication(first_number, second_number);
    res.write('<html><head><title>Calculator</title></head><body>Multiplication is: '+multiplication+'</body></html>')
  } else if (operation == 'division') {
    division = division(first_number, second_number);
    res.write('<html><head><title>Calculator</title></head><body>Division is: '+division+'</body></html>')
  }

});

app.listen(1234);