import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'UserManService';
  isRequired = false;


  constructor(private router:Router, private service: AuthService){
    
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
