import mysql from "mysql2"

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root', 
    password: '@Jtmetjmt4!', 
    database: process.env.MYSQL_DATABASE
}).promise()

/* TO DO:
need:
- validate inputs 
- update functions 
- delete functions 
- sorting and filtering functions
nice to have:
- use object literals to group related functions within each table (?) 
- add finally blocks to try-catch clauses for closing connections (?) */

/* --- jobs --- */
/* getJobs(), getJob(), createJob(params)*/

export async function getJobs() {
    try {
        const [rows] = await pool.query("SELECT * FROM jobs");
        return rows;
    }   catch (error) {
        throw new Error('Failed to fetch jobs: ' + error.message);
    }
}

export async function getJob(id) {
    try {
        const [rows] = await pool.query(`SELECT * 
        FROM jobs 
        WHERE id = ? 
        `, [id])
        return rows[0];
    } catch (error) {
        throw new Error('Failed to fetch job: ' + error.message);
    }
}

export async function createJob(user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email, idx_company, idx_title) {
    try {
        const [result] =  await pool.query(`
        INSERT INTO users(user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email, idx_company, idx_title)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email, idx_company, idx_title]);
    } catch (error) {
        throw new Error('Failed to create job: ' + error.message);
    }
    
    const id = result.insertId
    return getJob(id)
}

/* --- users  ---*/

export async function getUsers() {
    try {
        const [rows] = await pool.query("SELECT * FROM users");
        return rows;
    }   catch (error) {
        throw new Error('Failed to fetch users: ' + error.message);
    }
}

export async function getUser(id) {
    try {
        const [rows] = await pool.query(`SELECT * 
        FROM users 
        WHERE id = ? 
        `, [id])
        return rows[0];
    } catch (error) {
        throw new Error('Failed to fetch user: ' + error.message);
    }
}

/*updated to include new database schema fields */
export async function createUser(first_name, last_name, email, passwordHash) {
    try {
        const [result] =  await pool.query(`
        INSERT INTO users(first_name, last_name, email, passwordHash)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `, [first_name,last_name, email, passwordHash]);
    } catch (error) {
        throw new Error('Failed to create user: ' + error.message);
    }
    
    const id = result.insertId
    return getUser(id)
}

// const result = await createUser('test', 'test', 'test')
// const users = await getUser(2)
// console.log(result)
