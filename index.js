import express from 'express'
import route from './Router/Route.js'
import database from './Database/Db.js'
const app = express()
const PORT = 3521
database("mongodb://127.0.0.1:27017/Newone")

app.use(express.json())

app.use('/',route)
app.listen(PORT,()=>{
    console.log(`The is running under http://localhost:${PORT}`) 
})