import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenticationService } from '../../Service/user.service';
import * as alertify from 'alertifyjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../signup-page/signup-page.component.css']
})
export class LoginPageComponent implements OnInit{

  isLoading = false;
  // error: any = null;

  constructor(private authService: AuthenticationService, private router: Router) {}
  

  ngOnInit(): void {
    localStorage.clear();
  }
    
   

  proceedLogin(loginData: any){
    if(loginData.valid){
      this.authService.userLogin(loginData.value).subscribe({
        next: (resData) =>{
          if(resData != null){
            localStorage.setItem('token', '101');
            alertify.success('login successful')
            this.router.navigate(["/jobs/my-jobs"])
          }else{
            alertify.error('login failed')
          }
        }
      })
    }else{

    }
  }
}
