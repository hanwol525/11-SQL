const inquirer = require('inquirer');
const addDepartment = [
    {
        type: 'input',
        message: 'Department name: ',
        name: 'addDepartment'
    }
];
const addRole = [
    {
        type: 'input',
        message: 'Role name: ',
        name: 'roleName'
    },
    {
        type: 'input',
        message: 'Salary: ',
        name: 'roleSalary'
    },
    {
        type: 'input',
        message: 'Department: ',
        name: 'roleDepartment'
    }
];
const addEmployee = [
    {
        type: 'input',
        message: 'First name: ',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'Last name: ',
        name: 'lastName'
    },
    {
        type: 'input',
        message: 'Role: ',
        name: 'employeeRole'
    },
    {
        type: 'input',
        message: 'Manager (N/A if none): ',
        name: 'manager'
    }
];

function userChoice(data){
    if (data.choices === 'View all departments'){

    } else if (data.choices === 'View all roles'){

    } else if (data.choices === 'View all employees'){

    } else if (data.choices === 'Add a department'){
        inquirer
        .prompt(
            addDepartment
        )
        .then(
            // add dept to database fxn
        )

    } else if (data.choices === 'Add a role'){
        inquirer
        .prompt(
            addRole
        )
        .then (
            // add a role fxn
        )

    } else if (data.choices === 'Add an employee'){
        inquirer
        .prompt(
            addEmployee
        )
        .then(
            // add an employee fxn
        )

    } else if (data.choices === 'Update employee role'){

    };
};

module.exports = userChoice;