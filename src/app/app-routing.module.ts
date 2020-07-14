import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetNewsComponent } from './get-news/get-news.component';
import { componentFactoryName } from '@angular/compiler';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: 
    [
      {
        path: '', component: NavComponent,
        children: 
        [
          {
            path: '',
            component: GetNewsComponent
          },
          {
            path: 'app-get-news/:category',
            component: GetNewsComponent
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
