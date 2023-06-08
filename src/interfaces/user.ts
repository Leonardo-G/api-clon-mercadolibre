export interface IUserBody {
    username: string;
    lastname?: string;
    email: string;
    password: string;
    typeUser: 'user' | 'official-store';
    imgUrl?: string;
    categories?: any[];
    tags?: any[];
}

export interface IUserDB {
    _id: string;
    username: string;
    email: string;
    typeUser: 'user' | 'official-store';
    imgUrl: string
}