const inquirer = require('inquirer');
const db = require('./db');


inquirer .prompt ([
    {
        type: 'rawlist',
        name: 'viweEmployees',
        messages: 'Viwe employees',
        
    }


]);
