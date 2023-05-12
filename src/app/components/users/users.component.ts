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
  id:any;
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


  //delete
  deleteUser(id: string){
    console.log("DELETE");
    this.id = id;
    console.log(this.id);
  }
  confirmDelete(){
    this.service.deleteUserApi(this.id);
    location.reload();
  }
}
