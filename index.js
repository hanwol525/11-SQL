const inquirer = require('inquirer');
const userSelect = require('./db');

// array for inquirer questions
const promptOptions = [
    {
        type: 'list',
        message: 'Select action',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update employee role'
        ],
        name: 'selectchoice'
    }
]

// main prompts
inquirer 
.prompt(
    promptOptions
)
.then((data) => {
    userSelect(data)
})
