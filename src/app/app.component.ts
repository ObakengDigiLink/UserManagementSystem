import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'UserManService';
  isRequired = false;


  constructor(private router:Router, 
    private service: AuthService, 
    private bnIdle: BnNgIdleService){ 
  }

  ngOnInit(): void {
      this.bnIdle.startWatching(15).subscribe((isTimeOut: boolean) =>{
        if(isTimeOut){
          console.log('session expired');
          localStorage.clear();
          this.router.navigate(['login']);
          this.bnIdle.stopTimer();
        }
      });
  }

  ngDoCheck(): void {
    let currentUrl = this.router.url;
    if(currentUrl == '/login' || currentUrl == '/register'){
      this.isRequired = false;
    }else{
      this.isRequired = true;
    }
  }

  
  checkRole(){
    if(this.service.GetUserrole() === 'admin'){
      return true;
    }else{
      return false;
    }
  }
  getName(){
    return localStorage.getItem('name');
  };

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
