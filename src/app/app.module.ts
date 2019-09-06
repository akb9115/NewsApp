import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Constants } from '../constantFiles/constants';
import { AppComponent } from './app.component';
import { GetNewsComponent } from './get-news/get-news.component';
import { SummaryPipe } from 'src/Pipes/summary.pipe';
import { NewsServicesService } from './news-services.service';
import { ThemeService } from './theme-service.service';
import { headingSummaryPipe } from '../Pipes/headingSummaryPipe';
import { NavComponent } from './nav/nav.component';
import { MatchHeightDirective } from '../match-height.directive';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    GetNewsComponent,
    headingSummaryPipe,
    MatchHeightDirective,
    NavComponent,
    SummaryPipe,
    HomeComponent,
    LoginComponent,    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('/ngsw-worker.js'),
  ],
  providers: [
    GetNewsComponent,
    Constants,
    NewsServicesService,
    ThemeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
