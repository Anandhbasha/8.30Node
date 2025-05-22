import express from 'express'
import { deleteData, insertData, readData, updateData } from '../Controller/Controller.js';
const route = express.Router()

route.get('/read',readData)

route.post('/insert',insertData)
route.put('/update/:id', updateData);
route.delete('/deleteuser/:id',deleteData)
export default route