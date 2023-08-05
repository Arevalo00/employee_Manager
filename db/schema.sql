DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
    id INT NOT NULL, 
    employee_name VARCHAR (30) NOT NULL,
    PRIMARY KEY (id)


);

CREATE TABLE role (
    id INT NOT NULL, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 
);

CREATE TABLE employees (
    id INT NOT NULL, 
    manager_id INT,
    first_name VARCHAR (30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL

);