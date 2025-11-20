CREATE DATABASE Office;
USE office;

CREATE TABLE employees (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
department VARCHAR(60),
salary INT
);

CREATE TABLE students(
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(50),
subject VARCHAR(50),
marks INT
);

INSERT INTO employees (name, department, salary) VALUES
('Javed Khan', 'IT', 60000),
('Aarav Sharma', 'Sales', 48000),
('Neha Patel', 'HR', 52000),
('Rohit Verma', 'IT', 75000),
('Priya Mehta', 'Sales', 50000),
('Aman Gupta', 'Operations', 55000),
('Simran Kaur', 'IT', 67000),
('Vikram Singh', 'Finance', 72000),
('Ananya Das', 'HR', 47000),
('Raj Malhotra', 'Operations', 62000);


INSERT INTO students (name, subject, marks) VALUES
('Javed Khan', 'Math', 88),
('Aarav Sharma', 'Science', 75),
('Neha Patel', 'English', 92),
('Rohit Verma', 'Math', 67),
('Priya Mehta', 'Science', 81),
('Aman Gupta', 'Math', 59),
('Simran Kaur', 'English', 95),
('Vikram Singh', 'Science', 83),
('Ananya Das', 'Math', 72),
('Raj Malhotra', 'English', 90);

CREATE TABLE customers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  city VARCHAR(100)
);

INSERT INTO customers (name, city) VALUES
('Ravi Kumar', 'Delhi'),
('Sneha Kapoor', 'Mumbai'),
('Aman Gupta', 'Kolkata'),
('Neha Patel', 'Delhi'),
('Raj Malhotra', 'Bangalore'),
('Simran Kaur', 'Pune'),
('Rohit Verma', 'Mumbai'),
('Ananya Das', 'Hyderabad');
CREATE TABLE products (
  id INT PRIMARY KEY AUTO_INCREMENT,
  product_name VARCHAR(100),
  price INT
);

INSERT INTO products (product_name, price) VALUES
('Wireless Mouse', 450),
('Keyboard', 850),
('Monitor', 5500),
('USB Cable', 250),
('Smartphone', 9500),
('Headphones', 800),
('Charger', 650),
('Power Bank', 1200),
('Webcam', 999),
('Laptop Stand', 750);

CREATE TABLE orders(
id INT PRIMARY KEY AUTO_INCREMENT,
customer_id INT,
amount DECIMAL(10,2),
order_date DATE,
FOREIGN KEY(customer_id) REFERENCES customers(id)
);
INSERT INTO orders (customer_id,amount,order_date) VALUES
(1, 1200.50, '2024-07-01'),
(2, 750.00, '2024-07-02'),
(3, 320.00, '2024-07-03'),
(1, 1500.00, '2024-07-04'),
(2, 950.00, '2024-07-05'),
(1, 600.00, '2024-07-06'),
(4, 1250.00, '2024-07-07'),
(1, 2000.00, '2024-07-08'),
(3, 480.00, '2024-07-09'),
(2, 500.00, '2024-07-10');
# Revising the CORE SQL.
# MARKS OF STUDENT GREATER THAN 80
SELECT name,marks
FROM students
WHERE marks > 80;
#Reterive Custormers whose city is Delhi or Mumbai
SELECT name
FROM customers
WHERE city IN ('Delhi','Mumbai');
#Find products with price between 500 and 1000.
SELECT product_name,price
FROM products
WHERE price BETWEEN 500 AND 1000;
# Order employees by their salary in descending order.
SELECT name,salary
FROM employees
ORDER BY salary DESC;


# Practice question for aggregations.

#Find total number of students
SELECT COUNT(name)
FROM students;

#Find the average salary of employees
SELECT AVG(salary)
FROM employees;

#Find the minimum and maxium marks of students.
SELECT 
(SELECT MIN(marks) FROM students) AS min_Marks,
(SELECT MAX(marks) FROM students) AS max_Marks;

# Medium level questions.
#Show the total sales per customer.
SELECT customer_id,SUM(amount) AS total_Sales
FROM orders
GROUP BY customer_id;

#Find the average marks per subject.
SELECT subject, AVG(marks) as avg_Marks
FROM students
GROUP BY subject;

# COUNT the number of employees per department.
SELECT department,COUNT(id) as total_Emp
FROM employees
GROUP BY department;

# Get total salary per department but having employees >=2

CREATE TABLE department(
id INT PRIMARY KEY AUTO_INCREMENT,
department_name VARCHAR(60)
);

INSERT INTO department (department_name) VALUES
("IT"),
("Sales"),
("HR"),
("Operations"),
("Finance");

ALTER TABLE employees ADD COLUMN department_id INT;
UPDATE employees SET department_id =
CASE
	WHEN department = 'IT' THEN 1
    WHEN department = 'Sales' THEN 2
    WHEN department = 'HR' THEN 3
    WHEN department = 'Operations' THEN 4
    WHEN department = 'Finance' THEN 5
END;

ALTER TABLE employees
ADD FOREIGN KEY(department_id) REFERENCES department(id);

SELECT department,SUM(salary) AS total_Salary
FROM employees
JOIN department
ON department.id = employees.department_id
GROUP BY department
HAVING COUNT(*)>=2;

#Find customers who have placed orders more than 2 times
SELECT c.name,COUNT(o.customer_id) AS ordered_times
FROM customers c
JOIN orders o
ON c.id = o.customer_id
GROUP BY c.name
HAVING COUNT(*) > 2;

#Find the deparment with highest total salary
SELECT d.department_name,SUM(e.salary) AS total_salary
FROM employees e
JOIN department d
on e.department_id = d.id
GROUP BY d.department_name
ORDER BY total_salary DESC
LIMIT 1;

# Find average marks of students, but only where more than 10 students appeared

SELECT AVG(marks)
FROM students
GROUP BY subject
HAVING COUNT(id)>10;