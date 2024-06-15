// src/model/Forms.ts
import { Schema, model, Document } from 'mongoose';

export interface FormInterface extends Document {
    title: string;
    description: string;
    date: Date;
    isComplete: boolean;
}

const FormsSchema = new Schema<FormInterface>({
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

export const FormsModel = model<FormInterface>('Form', FormsSchema);
