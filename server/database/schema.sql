CREATE DATABASE job_app;
USE job_app;

CREATE TABLE users (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(40) NOT NULL,
    last_name VARCHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL,
    passwordHash VARCHAR(32) NOT NULL, /* will need a hashing function on insertion */
    dt_created DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    middle_name VARCHAR(40),
    title VARCHAR(40),
    school VARCHAR(40),
    major VARCHAR(40),
    PRIMARY KEY(id)
);

CREATE TABLE jobs (
    id INT AUTO_INCREMENT,
    INDEX user_id (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE /* delete job on user deletion*/
    company VARCHAR(40) NOT NULL,
    title VARCHAR(40) NOT NULL,
    progress ENUM('not started', 'started', 'completed') NOT NULL,
    response ENUM('pending', 'rejected', 'offer received') NULL DEFAULT 'pending',
    dt_created DATETIME DEFAULT CURRENT_TIMESTAMP,
    deadline DATE NOT NULL,
    details TEXT, 
    recruiter_name VARCHAR(100),
    recruiter_phone VARCHAR(15),
    recruiter_email VARCHAR(100),
    INDEX idx_company (company), /* allow indexing by both company and job title */
    INDEX idx_title (title),
    PRIMARY KEY (id)
)

INSERT INTO jobs (company, title, progress, deadline)
VALUES
('spotify', 'data scientist', 'not started', '2023-07-01')

INSERT INTO users (title, email, major)
VALUES
('carola', 'carolamaglione@gmail.com', 'computer science');