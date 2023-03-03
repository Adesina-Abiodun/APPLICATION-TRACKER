import { Component, OnInit , Directive } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Service/user.service';
import * as alertify from 'alertifyjs';
import { ValidationService } from 'src/app/Service/validation.service';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit{
  
  isLoading = false;
  error: any = null;
  isRegsiter = false;
  registerForm!: FormGroup;
  submitted = false;
 

  constructor(
    private fb: FormBuilder,
    private customValidator: ValidationService,
    private authService: AuthenticationService, 
    private router: Router,
 
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

 
  onSubmit() {
    this.submitted = true;
    console.log('Form valid:', this.registerForm.valid);
  
    if (this.registerForm.valid) {
      alertify.success('Signup successful');
      this.router.navigate(['/accountCreated']);
    } else {
      
        alertify.error('Signup failed')
    }
  }
}
