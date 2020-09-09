import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {userauth } from './Model/userauth'
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private host :string="http://localhost:1005";
  private jwtToken = null ;
  private roles:Array<any>=[];
  constructor(private http:HttpClient) {

   
   }

   login(user:userauth){
      return this.http.post(this.host+'login',user,{observe:'response'});
      console.log(user.username);
            
    }

    saveToken(jwt:string){
      this.jwtToken=jwt;
      localStorage.setItem('token',jwt);
      let helper = new JwtHelperService();
      this.roles=helper.decodeToken(this.jwtToken).roles;
      
      }

      loadToken(){
        this.jwtToken=localStorage.getItem('token');
      }

      public generateToken(request){

        return this.http.post("http://localhost:1005/login",request,{responseType: 'text' as 'json'}) ;
    
      }

}