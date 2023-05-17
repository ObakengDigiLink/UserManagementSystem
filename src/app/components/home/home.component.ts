import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  users: any;
  
  constructor(private service: AuthService){

  }

  ngOnInit(): void {
    this.users = this.service.getAll();
  }

  

  sessionUsername(){
    return localStorage.getItem('username');
  }
  
  dontShowLoggeIn(a: string){
    if(a === localStorage.getItem('username')){
      return false;
    }else{
      return true;
    }
  }


}
