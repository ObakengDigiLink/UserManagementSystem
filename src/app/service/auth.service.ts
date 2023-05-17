import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiUrl = 'http://localhost:3000/user';

  getAll(){
    return this.http.get(this.apiUrl);
  }

  getByCode(code: string){
    return this.http.get(this.apiUrl + '/' + code);
  }

  proceedRegister(inputData: any){
    return this.http.post(this.apiUrl, inputData);
  }

  updateUser(code: string, inputData: any){
    return this.http.put(this.apiUrl+'/'+code, inputData).subscribe( res => {
      this.getAll();
      location.reload();
    });
  }

  deleteUserApi(code:string){
    return this.http.delete(this.apiUrl+'/'+code).subscribe(res =>{
    });
  }

  IsLoggedIn(){
    if(localStorage.getItem('username') === null){
      return false;
    }else{
      return true;
    }
  }

  GetUserrole(){
    if(localStorage.getItem('userrole') === null){
      return '';
    }else{
      return localStorage.getItem('userrole');
    }
    //return localStorage.getItem('userrole')!=null?localStorage.getItem('userrole')?.toString():'';
  }
}
