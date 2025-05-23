import express from 'express'
import { deleteData, insertData, readData, update } from '../Controller/Controller.js';
const route = express.Router()

route.get('/read',readData)

route.post('/insert',insertData)
route.put('/update/:userEmail', update);
route.delete('/deleteuser/:userEmail',deleteData)
export default route