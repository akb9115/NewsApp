
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data:boolean;
  email;
  pwd;
  constructor(public loginService:LoginService,private router:Router) { 
     
  }
  onClick()
  {
    this.data=this.loginService.Login(this.email,this.pwd);
    if(this.data==true)
    {
    this.router.navigate(['home']);
    }
  }

  ngOnInit() {
  }

}