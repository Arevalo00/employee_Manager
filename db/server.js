const express = require('express');
const mysql = require('mysql2'); 

const PORT = process.env.PORT || 3001; 
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user:'arevalo',
        password: 'art1234',
        database:'employees_db'
    },
    console.log(`connected to my database`)
);

