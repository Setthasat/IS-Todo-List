import express from 'express';
import dotenv from 'dotenv';
//@ts-ignore
import cors from 'cors';
import mongoose from 'mongoose';
import 'reflect-metadata';
import { CreateTodoController } from './CreateTodo/CreateTodoController';
import { CreateTodoService, CreateTodoService2 } from './CreateTodo/CreateTodoService';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8888;
const Model = require('./model/form');

// (async () => {
//     try {
//         if (!process.env.DB_URL) {
//             throw new Error('DB_URL is not defined in environment variables');
//         }
//         await mongoose.connect(process.env.DB_URL);
//         console.log('Database connected ...');
//     } catch (err) {
//         console.error('Database connection error:', err);
//     }
// })();

const createTodoService = new CreateTodoService(Model);
const createTodoService2 = new CreateTodoService2(Model);
const createTodoController = new CreateTodoController(createTodoService2);

app.post('/todos', createTodoController.createForm);
app.post('/createPaper', createTodoController.createPaper);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});