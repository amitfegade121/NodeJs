//Creating a string
var statement = "this is a string test"
var str = "Please locate where 'locate' occurs!"

//gives the starting location of the given string-indexOf()
console.log(statement.indexOf("s"))
console.log(str.indexOf("locate"))

console.log(statement.slice(5,13))
console.log(statement.slice(-13,-5))
console.log(statement.substring(5,13))
console.log(statement.substr(5,5))
console.log(statement.split("s"))