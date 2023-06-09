import { Response } from "express";

class Controller {
    constructor() {}

    sendOk(res: Response, body: any) {
        return res.status(200).json(body);
    };

    created(res: Response, body: any) {
        console.log("CONTROLLER")
        return res.status(201).json(body);
    }

    
}

export default Controller;