const inquirer = require('inquirer');
const connection = require('./connection');
const { error } = require('console');

// prompts for adding/updating parts of the db
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
        message: 'Salary (numerical characters only): ',
        name: 'roleSalary'
    },
    {
        type: 'input',
        message: 'Department ID number (numerical characters only): ',
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
        message: 'Role ID number (numerical characters only): ',
        name: 'employeeRole'
    },
    {
        type: 'input',
        message: 'Manager ID number (numerical characters only; N/A if none): ',
        name: 'manager'
    }
];
const updateEmployee = [
    {
        type: 'input',
        message: 'Enter current EMPLOYEE ID number (numerical characters only): ',
        name: 'employeeLocate'
    },
    {
        type: 'input',
        message: 'Enter new ROLE ID number (numerical characters only): ',
        name: 'updatedRole'
    }
]

function userChoice(data) {
    if (data.selectchoice === 'View all departments'){
        let sql = `SELECT department.id, department.name FROM department;`
        connection.query(sql, (err, res) => {
            err ? console.error("error") : console.table(res);
        })
    } else if (data.selectchoice === 'View all roles'){
        let sql = `SELECT role.id, role.title, role.salary, role.department_id FROM role LEFT JOIN ;`;
        connection.query(sql, (err, res) => {
            err ? console.error("error") : console.table(res);
        });
    } else if (data.selectchoice === 'View all employees'){
        let sql = `SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id FROM employee;`;
        connection.query(sql, (err, res) => {
            err ? console.error("error") : console.table(res);
        })
    } else if (data.selectchoice === 'Add a department'){
        inquirer
        .prompt(addDepartment)
        .then(
            (data) => {
                let sql = `INSERT INTO department (name) VALUES ('${data.addDepartment}');`;
                connection.query(sql, (err, res) => {
                    err ? console.error("error") : console.log(`Successfully added ${data.addDepartment} department!`);
                })
            }
        )

    } else if (data.selectchoice === 'Add a role'){
        inquirer
        .prompt(addRole)
        .then (
            (data) => {
                let sql = `INSERT INTO role (title, salary, department_id) VALUES ('${data.roleName}', ${data.roleSalary}, ${data.roleDepartment});`
                connection.query(sql, (err, res) => {
                    err ? console.log(err) : console.log(`Successfully added ${data.roleName} role!`);
                })
            }
            
        );

    } else if (data.selectchoice === 'Add an employee'){
        inquirer
        .prompt(addEmployee)
        .then(
            (data) => {
                let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${data.firstName}', '${data.lastName}', ${data.employeeRole}, ${data.manager});`
                connection.query(sql, (err, res) => {
                    err ? console.error("error") : console.log(`Successfully added employee ${data.firstName} ${data.lastName}!`);
                })
            }
        );
        
    } else if (data.selectchoice === 'Update employee role'){
        inquirer
        .prompt(updateEmployee)
        .then((data) => {
            let sql = `UPDATE employee SET role_id = ${data.updatedRole} WHERE id = ${data.employeeLocate};`;
            connection.query(sql, (err, req) => {
                err ? console.error("error") : console.log("Successfully updated employee role!");
            })
        }
        )
    };
};

module.exports = userChoice;