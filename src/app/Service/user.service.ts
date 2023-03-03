import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


 

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}


userLogin(inputInfo: any){
   return this.http.post("https://jsonplaceholder.typicode.com/posts", inputInfo);
}

isLoggedIn(): boolean{
  return localStorage.getItem('token') != null;
}

getToken(){
  return localStorage.getItem('token') != null ?  localStorage.getItem('token'): ''; 
}



userSignUp(inputInfo: any){
  return this.http.post("https://jsonplaceholder.typicode.com/posts", inputInfo);
}





}
