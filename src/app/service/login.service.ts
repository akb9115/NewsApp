import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Login(email: string, pwd: string) {
    let flag = false;
      if (email === 'abc@example.com' && pwd ==='123') {
        flag = true;
      }
    return flag;
  }
  constructor() { }
}
