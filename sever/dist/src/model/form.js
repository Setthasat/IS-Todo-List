"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormsModel = void 0;
// src/model/Forms.ts
const mongoose_1 = require("mongoose");
const FormsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    isComplete: {
        type: Boolean,
        required: true
    },
});
exports.FormsModel = (0, mongoose_1.model)('Form', FormsSchema);
