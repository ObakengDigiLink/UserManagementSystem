import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: any;

  constructor(private service:AuthService, private builder:FormBuilder){
  }

  ngOnInit(): void {
    this.service.getByCode(localStorage.getItem('username')).subscribe(res =>{
        this.user = res;

        this.updateForm.setValue({
          id: this.user.id,
          name: this.user.name,
          password: this.user.password,
          email: this.user.email,
          title: this.user.title,
          branch: this.user.branch,
          role: this.user.role,
          isActive: this.user.isActive
        });
    });
  }



  updateForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name:this.builder.control('', Validators.required),
    password:this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}')])),
    email:this.builder.control('', Validators.compose([Validators.email, Validators.required])),
    title:this.builder.control('', Validators.required),
    branch:this.builder.control('', Validators.required),
    role:this.builder.control('', Validators.required),
    isActive:this.builder.control('', Validators.required)
  });

  update(){
    console.log(this.updateForm.value);
    console.log(this.updateForm.value.id);
    this.service.updateUser(this.updateForm.value.id, this.updateForm.value);
  }

}
