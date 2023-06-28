// WHEN I choose to add a department
    // I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
    // I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
    // I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
    // I am prompted to select an employee to update and their new role and this information is updated in the database 

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
