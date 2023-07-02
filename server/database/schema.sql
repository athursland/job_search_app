DROP DATABASE IF EXISTS job_app;
CREATE DATABASE job_app;
USE job_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(40) NOT NULL,
    middle_name VARCHAR(40),
    last_name VARCHAR(40) NOT NULL,
    title VARCHAR(40),
    school VARCHAR(40),
    major VARCHAR(40),
    email VARCHAR(255) NOT NULL,
    passwordHash VARCHAR(32) NOT NULL, /* will need a hashing function on insertion */
    dt_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE jobs (
    id INT AUTO_INCREMENT,
    user_id INT, /* make this not null and grab it from inserting user */
    INDEX user_id (user_id),
    FOREIGN KEY user_id (user_id) REFERENCES users(id) ON DELETE CASCADE, /* delete job on user deletion*/
    company VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    deadline DATE NOT NULL,
    progress ENUM('not started', 'started', 'completed') NOT NULL,
    response ENUM('pending', 'rejected', 'offer received') NULL DEFAULT 'pending',
    dt_created DATETIME DEFAULT CURRENT_TIMESTAMP,
    details TEXT, 
    recruiter_name VARCHAR(100),
    recruiter_phone VARCHAR(15),
    recruiter_email VARCHAR(100),
    INDEX idx_company (company), /* allow indexing by both company and job title */
    INDEX idx_title (title),
    PRIMARY KEY (id)
);

INSERT INTO jobs (company, title, progress, deadline, response, details, recruiter_name)
VALUES
('spotify', 'data scientist', 'started', '2023-07-10', 'pending', 'this is a test of the database schema', 'mitra kiciman');

INSERT INTO users (first_name, middle_name, last_name, title, school, major, email, passwordHash)
VALUES
('ali', 'kristine', 'thursland', 'student', 'duke university', 'computer science', 'athursland@gmail.com', 'dtech');