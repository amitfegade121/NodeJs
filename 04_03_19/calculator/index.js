//importing the arithmetic modules in calculator program
const add = require('./src/Addition/addition.js');
const sub = require('./src/Subtraction/subtraction.js');
const division = require('./src/Division/division.js');
const multiplication = require('./src/Multiplication/multiplication.js');
//hard code the variables
var a=2,b=8,c=9,d=10;

//calculating the expression:(a+b*c)/d
var multiply = multiplication(b,c);
var add_result = add(a,multiply);
var result =  division(add_result,d);

console.log(result)