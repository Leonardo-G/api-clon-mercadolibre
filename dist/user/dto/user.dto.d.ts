export declare class UserRegisterDTO {
    username: string;
    email: string;
    password: string;
    typeUser?: 'user' | 'official-store';
    imgUrl?: string;
}
declare const UserLoginDTO_base: import("@nestjs/mapped-types").MappedType<Pick<UserRegisterDTO, "email" | "password">>;
export declare class UserLoginDTO extends UserLoginDTO_base {
}
export {};
