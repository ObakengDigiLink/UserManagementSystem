import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private service:AuthService, private builder: FormBuilder, private router:Router){

  }

  registerationForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')])),
    email:this.builder.control('', Validators.compose([Validators.email, Validators.required])),
    title:this.builder.control('', Validators.required),
    branch:this.builder.control('', Validators.required),
    role:this.builder.control(''),
    isActive:this.builder.control(false)
  });

  

  proceedRegistration(){
    if(this.registerationForm.valid){
      this.service.proceedRegister(this.registerationForm.value).subscribe((res) => {
        window.alert('Please contact admin to enable access ,Registered successfully');
        this.router.navigate(['login']);
      }, (error: Response) => {
        if(error.status === 500){
          window.alert("Username already taken");
        }
      });
    }else{
      window.alert('Enter valid data');
    }
  }
}
