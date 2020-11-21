const express = require('express');
const  mysql = require('mysql');
const app = express();

//create connections
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sampleDB',
});

connection.connect(function(error){
    //callback
    if(!!error){
        console.log("ERROR");
    }
    else{
        console.log("Connected");
    }
});

//Create database

app.get('/',(req, res) => {
    //about sql
    connection.query('SELECT * FROM mySampleTable', function(error,rows,fields){
    if(!!error){
        //call back
        console.log("ERROR in query");
    }else{
        //parse with your rows
        console.log("No Error And Connected\n");
        console.log(rows);
        res.send("Hello " + rows[0].Name);
    }
    });
    
});

app.listen(1337);