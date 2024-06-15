"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//@ts-ignore
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const CreateTodoController_1 = require("./CreateTodo/CreateTodoController");
const CreateTodoService_1 = require("./CreateTodo/CreateTodoService");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
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
const createTodoService = new CreateTodoService_1.CreateTodoService(Model);
const createTodoService2 = new CreateTodoService_1.CreateTodoService2(Model);
const createTodoController = new CreateTodoController_1.CreateTodoController(createTodoService2);
app.post('/todos', createTodoController.createForm);
app.post('/createPaper', createTodoController.createPaper);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
