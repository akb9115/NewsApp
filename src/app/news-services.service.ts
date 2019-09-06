import { Http } from '@angular/http';
import { Constants } from 'src/constantFiles/constants';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NewsServicesService {

  

  constructor(public http:Http) {
   
   }

   sendNews(url:string)
   {
      return this.http.get(url);

   }
}
