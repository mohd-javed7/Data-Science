#PRACTICE QUESTIONS
CREATE DATABASE company;

CREATE TABLE employees(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(80),
salary INT
);

CREATE TABLE department(
department_id INT PRIMARY KEY AUTO_INCREMENT,
department_name VARCHAR(80),
employee_id INT,
FOREIGN KEY (employee_id) REFERENCES employees(id)
);

INSERT INTO employees (name, salary) VALUES
('Javed Khan', 55000.00),
('Aarav Sharma', 48000.00),
('Neha Patel', 52000.00),
('Rohit Verma', 60000.00),
('Priya Mehta', 47000.00),
('Aman Gupta', 53000.00),
('Simran Kaur', 49000.00),
('Vikram Singh', 61000.00),
('Ananya Das', 45000.00),
('Raj Malhotra', 58000.00);


INSERT INTO department (department_name, employee_id) VALUES
('Operations', 1),
('Operations', 2),
('IT', 3),
('IT', 4),
('Sales', 5),
('Operations', 6),
('IT', 7),
('IT', 8),
('Sales', 9),
('Sales', 10);


# Show all columns from employees table
SELECT * FROM employees;

# Show only name and salary
SELECT name,salary FROM employees;

# Find employees with salary > 50000
SELECT name
FROM employees
WHERE salary>50000;

# Show all employees ordered by salary in decending order
SELECT name
FROM employees
ORDER BY salary DESC;


# Get all employees whose department is sales.

SELECT e.name
FROM employees e
JOIN department d
ON e.id = d.employee_id
WHERE department_name = 'Sales';

# Get employees from 'IT' whose salary is greater than 50k.

SELECT e.name, e.salary
FROM employees e
JOIN department d
ON e.id = d.employee_id
WHERE salary > 50000 AND d.department_name = 'IT';

# Get employees who either works in Sales or IT department.
SELECT e.name
FROM employees e
JOIN department d
ON e.id = d.employee_id
WHERE d.department_name ='IT' OR d.department_name ='Sales';

# Displaye top 5 highest paid employees
SELECT e.name, e.salary
FROM employees e
ORDER BY salary DESC
LIMIT 5;

#Display employees from IT whose salary is greater than 55k and sort them.
SELECT e.name, e.salary
FROM employees e
JOIN department d
ON e.id = d.employee_id
WHERE salary> 55000 AND department_name = "IT"
ORDER BY salary DESC;

# Find all employees whose name starts with 'A'
SELECT e.name
FROM employees e
WHERE e.name LIKE 'a%';

# Find employees from IT and Sales whose salary is between 45k to 65k
SELECT e.name, e.salary, d.department_name
FROM employees e
JOIN department d
ON e.id = d.employee_id
WHERE d.department_name IN ('IT', 'Sales')
AND e.salary BETWEEN 45000 AND 65000; 
