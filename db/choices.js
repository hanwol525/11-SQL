const inquirer = require('inquirer');
// const connection = require('../config/connection');
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
    if (data.selectchoice === 'View all departments'){
        console.log("view all departments");
    } else if (data.selectchoice === 'View all roles'){
        console.log("view all roles");

    } else if (data.selectchoice === 'View all employees'){
        console.log("view all employees");
    } else if (data.selectchoice === 'Add a department'){
        inquirer
        .prompt(
            addDepartment
        )
        .then(
            // add dept to database fxn
            console.log("add a department")
        )

    } else if (data.selectchoice === 'Add a role'){
        inquirer
        .prompt(
            addRole
        )
        .then (
            // add a role fxn
            
        );
        console.log("add a role")

    } else if (data.selectchoice === 'Add an employee'){
        inquirer
        .prompt(
            addEmployee
        )
        .then(
            (data) =>
            {
                console.log(data)
            }
        );
        
    } else if (data.selectchoice === 'Update employee role'){
        console.log("update employee role");
    };
};

module.exports = userChoice;