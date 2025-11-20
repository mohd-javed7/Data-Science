CREATE DATABASE IF NOT EXISTS college;

USE college;

CREATE TABLE students(
id INT PRIMARY KEY,
name VARCHAR(30),
class_id INT);

INSERT INTO students(id,name,class_id) VALUES
(1,'A',101),
(2,"B",101),
(3,"C",NULL),
(4,"D",102);

CREATE TABLE classes(
class_id INT PRIMARY KEY,
class_name VARCHAR(50));

INSERT INTO classes(class_id,class_name) VALUES
(101,"Physics"),
(102,"Chemistry"),
(103,"Math");

#Q1
SELECT s.name,c.class_name
FROM students s
INNER JOIN classes c
ON s.class_id = c.class_id;

#Q2
SELECT s.name,c.class_name
FROM students s
LEFT JOIN classes c
ON s.class_id = c.class_id;

#Q3
SELECT s.name,c.class_name
FROM students s
RIGHT JOIN classes c
ON s.class_id = c.class_id;

#Q4
SELECT s.name,c.class_name
FROM students s
LEFT JOIN classes c
ON s.class_id = c.class_id
UNION
SELECT s.name,c.class_name
FROM students s
RIGHT JOIN classes c
ON s.class_id = c.class_id;

#5
SELECT s.name FROM students s
WHERE s.class_id IS NULL;

#6
SELECT c.class_name
FROM students s
RIGHT JOIN classes c
ON s.class_id = c.class_id
WHERE s.name IS NULL;

#7
SELECT c.class_name,COUNT(s.name) FROM students s
RIGHT JOIN classes c
ON s.class_id = c.class_id
GROUP BY c.class_name;

#8
SELECT s.name,c.class_name
FROM students s
CROSS JOIN classes c;

#9
SELECT s.name FROM students s
LEFT JOIN classes c
ON s.class_id = c.class_id
WHERE c.class_name = "Physics";

#10
SELECT MAX(c.class_name)
FROM students s
RIGHT JOIN classes c
ON s.class_id = c.class_id;