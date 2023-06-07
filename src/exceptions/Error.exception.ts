import { Response } from "express";

class ErrorException extends Error{
    readonly status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }

    sendResponse(res: Response) {
        res.status(this.status).json({
            error: {
              message: this.message,
              statusCode: this.status
            }
          });
    }
}

export class BadRequestException extends ErrorException {

    readonly status: number;
    readonly message: string;

    constructor(res: Response, message: string = "Bad Request") {
        super(400, message);
        this.status = 400;
        this.message = message;

        this.sendResponse(res);
    }
}

export class ServerErrorException extends ErrorException {

    readonly status: number;
    readonly message: string;

    constructor(res: Response, message: string = "Server error") {
        super(500, message);
        this.status = 400;
        this.message = message;

        this.sendResponse(res);
    }
}