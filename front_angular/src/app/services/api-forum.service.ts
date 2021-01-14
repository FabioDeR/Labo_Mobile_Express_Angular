import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm, RegisterForm } from '../models/forms.model';


@Injectable({
  providedIn: 'root'
})
export class ApiForumService {

        curentuser : User

        private url : string = "http://localhost:8000/"

  constructor(
    private _httpClient: HttpClient
  ) {}

  register(newUser : RegisterForm){
    this._httpClient.post(this.url + 'users/create', newUser).subscribe({
      next : () => console.log("Register Ok"),
      error : (error) => console.log(error)
    })

  }


  login(loginInfo : LoginForm){
    console.log(loginInfo);  
    this._httpClient.post(this.url+ 'users/login', loginInfo).subscribe({
      
        next:(userApi) => {
          // this.curentuser = userApi
          // sessionStorage.setItem("token", this.curentuser.token)
          console.log(userApi);          
        },
        error : (error)=> console.log(error)
        
    })

  }


  // disconnect(){

  // }




}
