const mysql = require('mysql2');
require('dotenv').config();


const connection = mysql.createConnection({
   name: process.env.DB_name,
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host: 'localhoust',
    port: 3001
  
});

module.exports = connection; 