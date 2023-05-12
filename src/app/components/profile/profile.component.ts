import { Component, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: any;
  constructor(private service:AuthService){
  }

  ngOnInit(): void {
    this.service.getByCode(localStorage.getItem('username')).subscribe(res =>{
      this.user = res;
   }); 
  }

  update(){
    console.log(localStorage.getItem('username'));
    console.log(this.user);
  }
}
