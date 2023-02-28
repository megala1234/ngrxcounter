export class AuthFormat{
    constructor(private email:string, 
        private token:string, 
        private localId: string, 
        private expirationDate:Date){}
}