DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE list_employee (
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL ,
    role_id INT NOT NULL,
    manager_id INT 
);

CREATE TABLE department( 
    id INT PRIMARY KEY,
    name VARCHAR (30) NOT NULL,
);

CREATE TABLE employee_role(
    id INT PRIMARY KEY, 
    title VARCHAR (30) NOT NULL, 
    salary DECIMAL,
    department_id INT NOT NULL,
    );