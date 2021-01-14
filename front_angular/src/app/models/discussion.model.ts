import { Message } from "./message.model";

export class Discussion{

        public id : number;
        public title: string;
        public subject: string;
        public isActive: boolean;
        public messages : Message[];
        
}