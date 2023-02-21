const express = require('express');
const mysql = require('mysql12');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

require('dotenv').config();


const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        deatabase:'employee_db'
    },
    console.log('connected to employee database')
);

//prompt user for options
const promptUser = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'Choose from the following',
            choices: [ 'view employees',
                        'view departments',
                        'view roles',
                        'add employee',
                        'add department',
                        'add role',
                        'Done']
        }
    ])

    .then((answers) => {
        const {choices} = answers;
        if (choices === 'view employees') {
            showlist_employee();
        }

        if (choices === 'view departments') {
            showdepartment();
        }

        if (choices === 'view roles') {
            showemployee_role();
        }

        if (choices === 'add employee') {
            addemployee();
        }
       
        if (choices === 'add department') {
            adddepartment();
        }
        
        if (choices === 'add role') {
            addrole();
        }

        if (choices === 'done') {
            Connection.end()
        };

    });
};


//show employee list 

app.get('/api/list_employee', ({ body}, res) => {
    const sql = ' SELECT id AS id, last_name AS last_name from list_employee';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.messagr});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//show department list 

app.get('/api/department', ({ body}, res) => {
    const sql = ' SELECT id AS id, name_dept AS name_dept from department';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.messagr});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


// show employee roles 

app.get('/api/employee_role', ({ body}, res) => {
    const sql = ' SELECT id AS id, title AS title from employee_role';

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.messagr});
            return;
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});

//add new employee 

app.post('/api/new-employee', ({body}, res) => {
    const sql = ' INSERT INTO list_employee (first_name, last_name, rold_id, manager_id) VALUES (?)';
    const params = [body.last_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        }
        res.json({
            message: 'added employee',
            data: body
        });
    });
});

//add new department

app.post('/api/new-department', ({body}, res) => {
    const sql = ' INSERT INTO department (name_dept) VALUES (?)';
    const params = [body.last_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        }
        res.json({
            message: 'added department',
            data: body
        });
    });
});

//add new employee role

app.post('/api/new-employee-role', ({body}, res) => {
    const sql = ' INSERT INTO employee_role (title, salary, department_id) VALUES (?)';
    const params = [body.last_name];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message});
            return;
        }
        res.json({
            message: 'added employee',
            data: body
        });
    });
});

