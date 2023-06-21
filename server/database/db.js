import mysql from "mysql2"

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: 'root', 
    password: '@Jtmetjmt4!', 
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getUsers() {
    const [rows] = await pool.query("SELECT * FROM users")
    return rows
}

export async function getUser(id) {
    const [rows] = await pool.query(`SELECT * 
    FROM users 
    WHERE id = ? 
    `, [id])
    return rows[0]
}

export async function createUser(title, email, major) {
   const [result] =  await pool.query(`
    INSERT INTO users(title, email, major)
    VALUES (?, ?, ?)
    `, [title, email, major])
    
    const id = result.insertId
    return getUser(id)
}

//const result = await createUser('test', 'test', 'test')
//const users = await getUser(2)
//console.log(result)
