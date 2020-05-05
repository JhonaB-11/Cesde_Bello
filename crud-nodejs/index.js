const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'medicalquotes'
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection secceded.');
    else
    console.log('DB connection failed \n Error: '+ JSON.stringify(err, undefined, 2));
});

app.listen(3000,() => {
    console.log('Express app listening on port 3000!');
});

app.get('/quotes',(req,res)=>{
    mysqlConnection.query('SELECT * FROM quotes',(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

app.get('/quotes/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM quotes WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


app.delete('/quotesdelete/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM quotes WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send('Deleted successfully.');
        else
            console.log(err);
    })
});

app.post('/quotesadd', (req, res) => {
    mysqlConnection.query('INSERT INTO quotes SET ?', req.body, (error, result) => {
        if (error) throw error;
 
        res.status(201).send(`User added with ID: ${result.id}`);
    });
});


//app.post('/quotesadd', (req, res) => {
    //let quot = req.body;
    //var sql = "SET @id = ?;SET @name = ?;SET @lastname = ?;SET @address = ?;SET @dateofbirth = ?;SET @city = ?;SET @neighborhood = ?;SET @phonenumber = ?; \
    //CALL quoteAddOrEdit(@id,@name,@lastname,@address,@dateofbirth,@city,@neighborhood,@phonenumber);";
    //mysqlConnection.query(sql, [quot.id, quot.name, quot.lastname, quot.address, quot.dateofbirth, quot.city, quot.neighborhood, quot.phonenumber], (err, rows, fields) => {
        //if (!err)
            //rows.forEach(element => {
                //if(element.constructor == Array)
                //res.send('Inserted quote id : '+element[0].id);
            //});
        //else
            //console.log(err);
    //})
//});


app.put('/quotesupdate', (req, res) => {
    let quot = req.body;
    var sql = "SSET @id = ?;SET @name = ?;SET @lastname = ?;SET @address = ?;SET @dateofbirth = ?;SET @city = ?;SET @neighborhood = ?;SET @phonenumber = ?;  \
    CALL quoteAddOrEdit(@id,@name,@lastname,@address,@dateofbirth,@city,@neighborhood,@phonenumber);";
    mysqlConnection.query(sql, [quot.id, quot.name, quot.lastname, quot.address, quot.dateofbirth, quot.city, quot.neighborhood, quot.phonenumber], (err, rows, fields) => {
        if (!err)
            res.send('Updated successfully');
        else
            console.log(err);
    })
});

