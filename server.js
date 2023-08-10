const express = require('express');
const mysql = require('mysql2'); 
const connection = require('./config/connection');


const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());



connection.sync({force: false}).then(()=> {
app.listen(PORT, ()=> console.log('now listhening'))
});

