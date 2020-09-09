import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../authentification.service'
import { Router } from '@angular/router';
import {userauth} from '../Model/userauth' ;
import * as $ from 'jquery';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  mode : number = 0;
  user:userauth;

  constructor(private authService: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    // localStorage.setItem('username', $('#email').val()) ;
    // this.user= new userauth ; 
    // this.user.username =  $('#email').val();
    // this.user.password = $('#password').val();
    // this.authService.login(this.user).subscribe(resp=>{
    //   let jwt = resp.headers.get('Authorization');
    //   this.authService.saveToken(jwt);
    //   this.authService.login(this.user);
    // this.router.navigateByUrl("/home") ;
    // },
    // err=>alert("Veillez verifier login ou password"))
  }

}
