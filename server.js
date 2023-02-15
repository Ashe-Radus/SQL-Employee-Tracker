const express = require('express');
const mysql = require('mysql12');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        deatabase:'employee_db'
    },
    console.log('connected to employee database')
);

