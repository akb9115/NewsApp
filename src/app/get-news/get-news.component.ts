import { ThemeService } from './../theme-service.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { environment } from '../../environments/environment';
import { NewsServicesService } from '../news-services.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.css']
})
export class GetNewsComponent implements OnInit, OnChanges {

  category;
  countryCode;

  //-----------------Pagination---------------------------------------------------------------
  totalNews: number; //Total no.of NEWS articles being recieved from API call and is used in Pagination
  page: number = 1;   //Page no. for use in pagination

 
  url = '';
  newsArray: any[]; // This array stores the array of dictionary of news reports.
  darkTheme = new FormControl(false);

  //-----------------------------------------------------------------------------------------------

  constructor( public service: NewsServicesService, private themeService: ThemeService,private route: ActivatedRoute) {
    this.themeService.toggleLight();
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      }
      else {
        this.themeService.toggleLight();
      }
    });
    
    this.category="general";
    this.countryCode="in";
    this.newsLayout();
  }

  ngOnInit() {
   this.route.paramMap.subscribe(data=>
    {
      if(data.get('category'))
      {
      this.category=data.get('category');
      this.newsLayout();
      }
      
    })
    this.route.queryParamMap.subscribe(data=>
      {
      if(data.get('country'))
      {
        this.countryCode=data.get('country');
        this.newsLayout();
      }
    }) 
 
  }

  ngOnChanges(changes: SimpleChanges) {
  //   console.log('code change happened', changes["countryCode"]);
  //   console.log('category change happened', changes["category"]);
  //   if (changes["countryCode"]) 
  //   {
  //     this.newsLayout();
  //   }
  //   if(changes["category"]) 
  //   {
  //     this.newsLayout();
  //   }

  //   if(changes["timerup"])
  //   {
  //     this.newsLayout();
  //   }
  }

  newsLayout() 
  {
    console.log('newsCategory'+this.category)
    console.log('newsCountry'+this.countryCode)
    this.newsArray = [];
    this.url = `${environment.url}${this.countryCode}&category=${this.category}&apiKey=${environment.apikey}`;
    this.service.sendNews(this.url).subscribe
    (
      response =>
      {
        this.newsArray = response.json().articles;
        this.totalNews = this.newsArray.length;
      }, () => 
        {
        alert("Oops!!! An unexpected error occured");
        }
    )
  }


  goToPage(news)
  {
    window.location.href = news.url;
  }



  

}