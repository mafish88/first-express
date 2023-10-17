import express from 'express'
import { getAllStudents, addStudent } from './src/students.js'

const app = express()
app.use(express.json())

app.get("/students", getAllStudents)
app.post("/students", addStudent)

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000...')
})