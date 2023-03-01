import { AuthFormat } from './../models/authFormat.model';
import { Observable } from 'rxjs';

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { authResponse } from "../models/authResponse.model";

@Injectable({
    providedIn:'root'
})
export class AuthService{

    constructor(private http: HttpClient){}
   // CUSTOM_TOKEN = '...5rZfhIzAN5btBo2Q26jcW5kxjQW2';
    login(email:string,password:string):Observable<authResponse>{
       return this.http.post<authResponse>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
        {email,password,returnSecureToken:true});
    }

    formatUser(data:any){
        const expiredDate = new Date(new Date().getTime()+ data.expiresIn * 1000)
            const userFormat = new AuthFormat(data.email,data.idToken,data.localId,expiredDate);
            return userFormat;
    }

    getErrorMsgFormat(error:string){
        switch(error){
            case 'EMAIL_NOT_FOUND':
                return 'Email Not Found';
            case 'INVALID_PASSWORD':
                return 'Invalid Password';
            default:
                return 'Something Went Wrong.Please Try again';
        }
    }

}