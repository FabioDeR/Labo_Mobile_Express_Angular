import { Message } from "./message.model";
import { Role } from "./role.model";

export class User{

    public Id : number;
    public username: string;
    public password: string;
    public email: string;
    public avatar: string;
    public lastname: string;
    public firstname: string;
    public isActive:boolean;
    public count: number;
    public messages : Message[];
    public roles : Role[];
    public token: string;


    constructor(){

    }
}