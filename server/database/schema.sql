CREATE DATABASE job_app;
USE job_app;

CREATE TABLE users (
    id integer PRIMARY key AUTO_INCREMENT, 
    title TEXT NOT NULL,
    email TEXT NOT NULL,
    major TEXT NOT NULL
);

INSERT INTO users (title, email, major)
VALUES
('carola', 'carolamaglione@gmail.com', 'computer science');