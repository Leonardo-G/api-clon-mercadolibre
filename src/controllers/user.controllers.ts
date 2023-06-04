import UserMiddleware from '../middlewares/user.middleware';

class UserController {
    readonly userMiddleware: UserMiddleware;

    constructor() {
        
        this.userMiddleware = new UserMiddleware();
    }
    
    static postLogin(){
        console.log("HOLA");
    }

    postRegister(){
    }
}

export default UserController;