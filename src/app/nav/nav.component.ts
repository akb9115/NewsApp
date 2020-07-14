import { Http } from '@angular/http';
import { FormControl } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Constants } from 'src/constantFiles/constants';
import { ThemeService } from '../theme-service.service';
import { NewsServicesService } from '../news-services.service';
import { Output, EventEmitter, Input } from '@angular/core';
import { Subscription, Observable, timer } from 'rxjs';
import * as moment from 'moment';
import { Router, ActivatedRoute } from '@angular/router';
import { GetNewsComponent } from '../get-news/get-news.component';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() countryChange = new EventEmitter();
  @Output() categoryChange = new EventEmitter();
  @Output() setHome = new EventEmitter();
  @Output() timeup= new EventEmitter();

  countryData;      // This variable is used to change the country parameter in the News API url.
  categories;      // This variable is used to change the News Category parameter in the News API url.
  darkTheme = new FormControl(false);
  savedCategory='general';

   //----------------Auto-refresh------------------
   private subscription: Subscription;

   @Input() SearchDate: moment.Moment = moment();
   @Input() ElapsTime: number = 5;
 
   searchEndDate: moment.Moment;
   remainingTime: number;
   minutes: number;
   seconds: number;
   everySecond: Observable<number> = timer(0, 1000);
 
 
   //----------------Local variables for Api call and Theme service----------------------------------
 



  constructor(public http: Http, public data: Constants,private ref: ChangeDetectorRef, public service: NewsServicesService, private themeService: ThemeService,private router:Router,private route:ActivatedRoute) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      }
      else {
        this.themeService.toggleLight();
      }
    });
    this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
  }

  ngOnInit() {
    this.countryData = this.data.countriesData();
    this.categories = this.data.getCategories();

     //-------------Logic for Auto-refresh-----------------------
     this.subscription = this.everySecond.subscribe((seconds) => {
      var currentTime: moment.Moment = moment();
      this.remainingTime = this.searchEndDate.diff(currentTime)
      this.remainingTime = this.remainingTime / 1000;

      if (this.remainingTime <= 0) {
        this.SearchDate = moment();
        this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
        console.log('timer up');
        this.timeup.emit();

      }
      else {
        this.minutes = Math.floor(this.remainingTime / 60);
        this.seconds = Math.floor(this.remainingTime - this.minutes * 60);
      }
      this.ref.markForCheck()
    })

  }
  saveCategory(data)
  {
    this.savedCategory=data;
  }
  passCountry(data)
  {

    this.router.navigate(['home/app-get-news/'+this.savedCategory+'/'],
     { queryParams: {country:data}}
     )
  }
  setDefault()
  {
    let defaultCategory="general";
    this.router.navigate(['home/app-get-news/'+defaultCategory+'/'],
     { queryParams: {country:"in"}}
     )
  }

}
