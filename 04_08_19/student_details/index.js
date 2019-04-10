const studentDetails = require('./src/details')
const express = require('express');
const app = express();
const path = require("path")

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
var dbo;
var connection = mongo.connect(url, { useNewUrlParser: true },(err,db)=>{
    if(err) throw err;
    dbo = db.db("mydb");
});
app.get('/', (req, res) => {
    res.sendFile('home.html',
        {
            root: path.join(__dirname, './public')
        });
});

app.get('/details', (req, res) => {
    res.sendFile('details.html',
        {
            root: path.join(__dirname, './public')
        });
});

app.post('/details', (req, res) => {
    console.log(req)
    let details = req.body;
    //console.log(details);
    let stdDetails = studentDetails(details.name,details.dateOfBirth,details.phoneNumber,details.address);
    dbo.collection("studentDetails").insertOne(stdDetails, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
       
    });
    res.redirect('/details')
});
app.get('/searchstudent', (req, res) => {
    res.sendFile('searchstudent.html',
        {
            root: path.join(__dirname, './public')
        });
});

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/searchstudentdetails', (req, res) => {
    console.log(req.query);
    let name = req.query.name;
    dbo.collection("studentDetails").findOne({name},function (err, result) {
        if (err) console.log(err);
        res.render("detailsDisplay", {result: result});
        console.log(result);
    });
});

app.get('/searchDetails', (req, res) => {
    res.sendFile('updateStudentSearch.html',
        {
            root: path.join(__dirname, './public')
        });
});
app.get('/updateDetails',(req,res)=>{
    console.log(req.query);
    let name = req.query.name;
    dbo.collection("studentDetails").findOne({name},function (err, result) {
        if (err) console.log(err);
        res.render("updateDetails", {studentDetail: result});
        console.log(result);
    });
})

app.put("/updateStudentDetails",(req,res)=>{
    let updatedDetails = req.query;
    console.log(updatedDetails);
    dbo.collection("studentDetails").updateOne({updatedDetails},function(err,result){
        if(err) throw err;
       // res.redirect("/")
        console.log("1 document updated")
    })
})
app.listen(2346);