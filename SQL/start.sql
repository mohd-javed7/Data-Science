CREATE DATABASE college;

USE college;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50),
age INT NOT NULL
);

INSERT INTO student(id,name,age) VALUES
(1,"Javed",22),
(2,"Nika",1000),
(3,"Luffy",23);

SELECT * FROM student;

SELECT name,id FROM student;

SELECT * FROM student WHERE age > 22; #ages above 2 will be shown

SHOW DATABASES;
SHOW TABLES; 