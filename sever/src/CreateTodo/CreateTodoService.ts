import { Model } from 'mongoose';
import { FormInterface } from '../model/form';
import { BaseResponse, createTodoType } from '../utils/Baserespond';

export interface CreateTodoServiceInterface {
    createForm(title: string, description: string, date: Date, isComplete: boolean) : Promise<createTodoType>
    createNote() : Promise<createTodoType>
    createPapper() : Promise<createTodoType>
}

export class CreateTodoService implements CreateTodoServiceInterface {

    private todoModel: Model<FormInterface>;

    constructor(todoModel: Model<FormInterface>) {
        this.todoModel = todoModel;
    }
    createPapper(): Promise<createTodoType> {
        throw new Error('Method not implemented.');
    }
    createNote(): Promise<createTodoType> {
        throw new Error('Method not implemented.');
    }

    async createForm(title: string, description: string, date: Date, isComplete: boolean) : Promise<createTodoType> {

        //@ts-ignore
        const baseResponse = new BaseResponse();

        if (!title) {
            baseResponse.setValue(400, "Title is invalid", null);
            return baseResponse.buildResponse();
        };
        if (!description) {
            baseResponse.setValue(400, "Description is invalid", null);
            return baseResponse.buildResponse();
        };
        if (!date) {
            baseResponse.setValue(400, "Date is invalid", null);
            return baseResponse.buildResponse();
        };
        if (typeof isComplete !== 'boolean') {
            baseResponse.setValue(400, "isComplete is invalid", null);
            return baseResponse.buildResponse();
        };

        const item: FormInterface = {
            title,
            description,
            date,
            isComplete,
        } as FormInterface;

        try {
            const createdItem = await this.todoModel.create(item);
            baseResponse.setValue(201, "Todo created successfully!", createdItem);
            return baseResponse.buildResponse();
        } catch (err) {
            console.log(`Something went wrong: ${err}`);
            baseResponse.setValue(500, "Internal Server Error", null);
            return baseResponse.buildResponse();
        }
    }
}

export class CreateTodoService2 implements CreateTodoServiceInterface {

    private todoModel: Model<FormInterface>;

    constructor(todoModel: Model<FormInterface>) {
        this.todoModel = todoModel;
    }
    createPapper(): Promise<createTodoType> {
        throw new Error('Method not implemented.');
    }

    createNote(): Promise<createTodoType> {
        throw new Error('Method not implemented.');
    }

    async createForm(title: string, description: string, date: Date, isComplete: boolean) : Promise<createTodoType> {

        //@ts-ignore
        const baseResponse = new BaseResponse();

        //if already have word retrun word is alreay exits

        if (!title) {
            baseResponse.setValue(400, "Title is invalid", null);
            return baseResponse.buildResponse();
        };
        if (!description) {
            baseResponse.setValue(400, "Description is invalid", null);
            return baseResponse.buildResponse();
        };
        if (!date) {
            baseResponse.setValue(400, "Date is invalid", null);
            return baseResponse.buildResponse();
        };
        if (typeof isComplete !== 'boolean') {
            baseResponse.setValue(400, "isComplete is invalid", null);
            return baseResponse.buildResponse();
        };

        const item: FormInterface = {
            title,
            description,
            date,
            isComplete,
        } as FormInterface;

        try {
            const createdItem = await this.todoModel.create(item);
            baseResponse.setValue(201, "Todo created successfully!", createdItem);
            return baseResponse.buildResponse();
        } catch (err) {
            console.log(`Something went wrong: ${err}`);
            baseResponse.setValue(500, "Internal Server Error", null);
            return baseResponse.buildResponse();
        }
    }
}

