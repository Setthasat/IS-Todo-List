export type createTodoType = {
    status: {
        code: number,
        description: string,
    },
    data: any;
};

export class BaseResponse {

    code: number;
    description: string;
    data: any;

    constructor(code: number, description: string, data: any) {
        this.code = code;
        this.description = description;
        this.data = data;
    }

    buildResponse(): createTodoType {
        return {
            status: {
                code: this.code,
                description: this.description,
            },
            data: this.data
        };
    }

    setValue(code: number, description: string, data: any) {
        this.code = code;
        this.description = description;
        this.data = data;
    }
}