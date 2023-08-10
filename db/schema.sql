DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    department VARCHAR (30) NOT NULL

);

CREATE TABLE roles (
    id INT NOT NULL, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL
    FOREIGN KEY (departments_id)
    REFERENCES departments(id)
    ON DELETE SET NULL 
   
 
);

CREATE TABLE employees (
    id INT NOT NULL, 
    manager_id INT,
    first_name VARCHAR (30) NOT NULL, 
    last_name VARCHAR (30) NOT NULL
);

