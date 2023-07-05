import express from 'express'

import { getUsers, getUser, createUser  } from './database/db.js'


const app = express()
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await getUsers()
  res.send(users)
})

app.get("/users/:id", async (req, res) => {
  const id = req.params.id
  const user = await getUser(id)
  res.send(user)
})

app.post("/notes", async (req, res) => {
  const { title, email, major} = req.body
  const user = await createUser(title, email, major)
  res.status(201).send(user)
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something broke!")
})

app.get("/api", (req, res) => {
  console.log('Hi')
  res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
}); 