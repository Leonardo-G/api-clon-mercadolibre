import { Router } from "express";

class UserRouter {
    readonly router: Router;
    constructor() {
        this.router = Router();

        this.setupRotes();
    }

    setupRotes(){
        this.router.post('/login', this.postLogin);
        this.router.post('/register', this.postRegister);
    }
    
    postLogin(){
    }

    postRegister(){
    }
}

export default UserRouter;