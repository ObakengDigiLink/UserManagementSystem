import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;
  user:any;
  id:string;
  constructor(private service:AuthService, private builder: FormBuilder, private router:Router){

  }

  ngOnInit(): void {
    this.users = this.service.getAll();
  }

  //function do display role
  role(role:String){
    if(role === null || role === ''){
      return 'unassigned';
    }else{
      return role;
    }
  }
  //function to display isActive
  isActive(active:boolean){
    if(active){
      return 'Acive';
    }else{
      return 'In Active';
    }
  }

  //update
  update(id:string){
    this.service.getByCode(this.getCurrId(id)).subscribe(res => {
      this.user = res;
      console.log(this.user);
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

  confirmUpdate(){
    console.log(this.user);
    this.service.updateUser(this.updateForm.value.id, this.updateForm.value);
    location.reload();
  }



  //get current ID
  getCurrId(id: string){
    return id;
  }

  

  //deleteUser
  confirmDelete(){
    this.service.deleteUserApi(this.id);
    console.log(this.id)
    location.reload();
  }

  getID(id: string){
    this.id = id;
    console.log(this.id);
  }
}
