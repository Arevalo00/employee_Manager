const inquirer = require('inquirer');
const db = require('./db');


inquirer .prompt ([
    {
        type: 'rawlist',
        name: 'viweEmployees',
        messages: 'Viwe employees',
        choices: ['department', 'roles', 'emplopyee names'],

    }
.then((answers)=> {
    if (answers.viweEmployees === 'department'){
        viweEmployeesDepartment()
    }
    
})
]);
