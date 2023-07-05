import mysql from "mysql2"

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root', 
    password: 'password', 
    database: process.env.MYSQL_DATABASE
}).promise()

/* TO DO:
need:
- validate inputs 
- sorting and filtering functions
nice to have:
- use object literals to group related functions within each table (?) 
- add finally blocks to try-catch clauses for closing connections (?) */

/* --- jobs --- */

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

export async function createJob(user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email) {
    try {
        const [result] =  await pool.query(`
        INSERT INTO users(user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [user_id, company, title, deadline, progress, response, dt_created, details, recruiter_name, recruiter_phone, recruiter_email]);
    } catch (error) {
        throw new Error('Failed to create job: ' + error.message);
    }
    const id = result.insertId
    return getJob(id)
}

export async function updateJob(id, updates) {
    try {
        const { company, title, deadline, progress, response, details, recruiter_name, recruiter_phone, recruiter_email } = updates;
        await pool.query(`
            UPDATE jobs 
            SET company = ?, title = ?, deadline = ?, progress = ?, response = ?, details = ?, recruiter_name = ?, recruiter_phone = ?, recruiter_email = ?
            WHERE id = ?
        `, [company, title, deadline, progress, response, details, recruiter_name, recruiter_phone, recruiter_email, id]);
        return getJob(id);
    } catch (error) {
        throw new Error('Failed to update job: ' + error.message);
    }
}

export async function deleteJob(id) {
    try {
        await pool.query(`DELETE FROM jobs WHERE id = ?`, [id]);
        return true;
    } catch (error) {
        throw new Error('Failed to delete job: ' + error.message);
    }
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
        VALUES (?, ?, ?, ?)
        `, [first_name,last_name, email, passwordHash]);
    } catch (error) {
        throw new Error('Failed to create user: ' + error.message);
    }
    
    const id = result.insertId
    return getUser(id)
}

export async function updateUser(id, updates) {
    try {
        const { first_name, middle_name, last_name, title, school, major, email } = updates;
        await pool.query(`
            UPDATE users 
            SET first_name = ?, middle_name = ?, last_name = ?, title = ?, school = ?, major = ?, email = ?
            WHERE id = ?
        `, [first_name, middle_name, last_name, title, school, major, email, id]);
        return getUser(id);
    } catch (error) {
        throw new Error('Failed to update user: ' + error.message);
    }
}

export async function deleteUser(id) {
    try {
        await pool.query(`DELETE FROM users WHERE id = ?`, [id]);
        return true;
    } catch (error) {
        throw new Error('Failed to delete user: ' + error.message);
    }
}

// const result = await createUser('test', 'test', 'test')
// const users = await getUser(2)
// console.log(result)
