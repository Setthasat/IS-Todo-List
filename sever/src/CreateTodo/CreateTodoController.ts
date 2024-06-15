import { Request, Response } from 'express';
import { CreateTodoService, CreateTodoServiceInterface } from './CreateTodoService';
import { BaseResponse, createTodoType } from '../utils/Baserespond';

export class CreateTodoController {

    //@ts-ignore
    BaseRespondInst = new BaseResponse();

    private createTodoService: CreateTodoServiceInterface;

    constructor(createTodoService: CreateTodoServiceInterface) {
        this.createTodoService = createTodoService;
    }

    delay (ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    createForm = async (req: Request, res: Response) => {
        const { title, description, date, isComplete } = req.body;
        // const response = await this.createTodoService.createForm(title, description, new Date(date), isComplete);
        // const respond2 = await this.createTodoService.createNote
        this.BaseRespondInst.setValue(200, "create sej la", "safe");
        const response = this.BaseRespondInst.buildResponse();
        await this.delay(10000);
        res.status(response.status.code).json(response);
    };

    createPaper = async (req: Request, res: Response) => {
        const response = this.BaseRespondInst.buildResponse();
        res.status(response.status.code).json(response);
    };
}
