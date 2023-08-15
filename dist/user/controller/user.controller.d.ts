/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserLoginDTO, UserRegisterDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    postRegister(userRegisterDTO: UserRegisterDTO): Promise<import("../interface/user.interface").IUserReturn>;
    postLogin(userLoginDTO: UserLoginDTO): Promise<{
        _id: any;
        username: string;
        email: string;
        typeUser: string;
        imgUrl: string;
        token: string;
    }>;
    getStores(category: string, limit: number, skip: number): Promise<(import("mongoose").Document<unknown, {}, import("../model/user.model").User> & import("../model/user.model").User & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
