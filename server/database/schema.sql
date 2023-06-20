CREATE DATABASE job_app;
USE job_app;

CREATE TABLE users (
    id integer PRIMARY key AUTO_INCREMENT, 
    title TEXT NOT NULL,
    email TEXT NOT NULL,
    major TEXT NOT NULL
);

CREATE TABLE jobs (
    id integer PRIMARY key AUTO_INCREMENT,
    company VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    progress ENUM('not started', 'started', 'completed') NOT NULL,
    response CASE WHEN progress = 'completed' ENUM('pending', 'rejected', 'offer received'),
    deadline DATE NOT NULL,
    details TEXT, 
    recruiter_name VARCHAR(100),
    recruiter_phone VARCHAR(15),
    recruiter_email VARCHAR(100)
)

INSERT INTO jobs (company, title, progress, deadline)
VALUES
('spotify', 'data scientist', 'not started', '2023-07-01')

INSERT INTO users (title, email, major)
VALUES
('carola', 'carolamaglione@gmail.com', 'computer science');