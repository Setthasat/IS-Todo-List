"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoService2 = exports.CreateTodoService = void 0;
const Baserespond_1 = require("../utils/Baserespond");
class CreateTodoService {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    createPapper() {
        throw new Error('Method not implemented.');
    }
    createNote() {
        throw new Error('Method not implemented.');
    }
    createForm(title, description, date, isComplete) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            const baseResponse = new Baserespond_1.BaseResponse();
            if (!title) {
                baseResponse.setValue(400, "Title is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (!description) {
                baseResponse.setValue(400, "Description is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (!date) {
                baseResponse.setValue(400, "Date is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (typeof isComplete !== 'boolean') {
                baseResponse.setValue(400, "isComplete is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            const item = {
                title,
                description,
                date,
                isComplete,
            };
            try {
                const createdItem = yield this.todoModel.create(item);
                baseResponse.setValue(201, "Todo created successfully!", createdItem);
                return baseResponse.buildResponse();
            }
            catch (err) {
                console.log(`Something went wrong: ${err}`);
                baseResponse.setValue(500, "Internal Server Error", null);
                return baseResponse.buildResponse();
            }
        });
    }
}
exports.CreateTodoService = CreateTodoService;
class CreateTodoService2 {
    constructor(todoModel) {
        this.todoModel = todoModel;
    }
    createPapper() {
        throw new Error('Method not implemented.');
    }
    createNote() {
        throw new Error('Method not implemented.');
    }
    createForm(title, description, date, isComplete) {
        return __awaiter(this, void 0, void 0, function* () {
            //@ts-ignore
            const baseResponse = new Baserespond_1.BaseResponse();
            //if already have word retrun word is alreay exits
            if (!title) {
                baseResponse.setValue(400, "Title is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (!description) {
                baseResponse.setValue(400, "Description is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (!date) {
                baseResponse.setValue(400, "Date is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            if (typeof isComplete !== 'boolean') {
                baseResponse.setValue(400, "isComplete is invalid", null);
                return baseResponse.buildResponse();
            }
            ;
            const item = {
                title,
                description,
                date,
                isComplete,
            };
            try {
                const createdItem = yield this.todoModel.create(item);
                baseResponse.setValue(201, "Todo created successfully!", createdItem);
                return baseResponse.buildResponse();
            }
            catch (err) {
                console.log(`Something went wrong: ${err}`);
                baseResponse.setValue(500, "Internal Server Error", null);
                return baseResponse.buildResponse();
            }
        });
    }
}
exports.CreateTodoService2 = CreateTodoService2;
