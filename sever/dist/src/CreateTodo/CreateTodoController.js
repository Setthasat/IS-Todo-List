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
exports.CreateTodoController = void 0;
const Baserespond_1 = require("../utils/Baserespond");
class CreateTodoController {
    constructor(createTodoService) {
        //@ts-ignore
        this.BaseRespondInst = new Baserespond_1.BaseResponse();
        this.createForm = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { title, description, date, isComplete } = req.body;
            // const response = await this.createTodoService.createForm(title, description, new Date(date), isComplete);
            // const respond2 = await this.createTodoService.createNote
            this.BaseRespondInst.setValue(200, "create sej la", "safe");
            const response = this.BaseRespondInst.buildResponse();
            yield this.delay(10000);
            res.status(response.status.code).json(response);
        });
        this.createPaper = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const response = this.BaseRespondInst.buildResponse();
            res.status(response.status.code).json(response);
        });
        this.createTodoService = createTodoService;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
exports.CreateTodoController = CreateTodoController;
