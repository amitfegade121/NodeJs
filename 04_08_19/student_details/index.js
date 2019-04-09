const studentDetails = require('./src/details')
const express = require('express');
const app = express();
const path = require("path")

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/mydb";
var dbo;
mongo.connect(url, { useNewUrlParser: true },(err,db)=>{
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
    let stdDetails = studentDetails(details);
    dbo.collection("studentDetails").insertOne(stdDetails, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
       
    });
    res.redirect('/details')
});

// app.set("view engine", "pug");
// app.set("views", path.join(__dirname, "views"));

// app.get('/searchstudent', (req, res) => {
//     console.log(req.query);
//     let name = req.query.name;
//     dbo.collection("studentDetails").findOne({name},function (err, result) {
//         if (err) throw err;
//         res.render("display", {result: result});
//         console.log(result);

        

//     });
// });

app.listen(2346);