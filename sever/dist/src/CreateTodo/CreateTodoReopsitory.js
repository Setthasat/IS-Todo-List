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
class CreateTodoRepostiotry {
    constructor() {
        this.saveData = (item) => __awaiter(this, void 0, void 0, function* () {
            // try {
            //     const createdItem = await this.todoModel.create(item);
            //     baseResponse.setValue(201, "Todo created successfully!", createdItem);
            //     return baseResponse.buildResponse();
            // } catch (err) {
            //     console.log(`Something went wrong: ${err}`);
            //     baseResponse.setValue(500, "Internal Server Error", null);
            //     return baseResponse.buildResponse();
            // }
        });
    }
}
exports.default = CreateTodoRepostiotry;
