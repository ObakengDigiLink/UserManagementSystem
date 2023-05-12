import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userdata: any;
  constructor(private builder: FormBuilder, 
    private service: AuthService, private router: Router){
    //sessionStorage.clear();
  }

  ngOnInit(): void {
    if (this.service.IsLoggedIn()) {
      this.router.navigate(['']);  
    }
  }

  loginForm=this.builder.group({
    username:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.required)
  });

  proceedLogin(){
    if(this.loginForm.valid){

     this.service.getByCode(this.loginForm.value.username).subscribe(res => {
      this.userdata=res;
      console.log(this.userdata)
    
      if(this.userdata.password===this.loginForm.value.password){
        if(this.userdata.isActive){
          localStorage.setItem('username',this.userdata.id);
          localStorage.setItem('userrole',this.userdata.role);
          localStorage.setItem('name', this.userdata.name);
          console.log(this.userdata.id);
          console.log(this.userdata.role);
          this.router.navigate(['']);
        }else{
          window.alert('Your account is not yet active!, contact Admin');
        }
      }else{
        window.alert("Invalid Password!");
      }
     }, (error: Response) => {
      if(error.status == 404){
        window.alert("Invalid Usernme")
      }
     });
     
    }else{
      window.alert("Enter valid data!");
    }
  }
}
