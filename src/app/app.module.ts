import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SeriesComponent } from './series/series.component';
import {ServiceseriesService} from './serviceseries.service';
import { SeasonComponent } from './season/season.component';
import { ComicsComponent } from './comics/comics.component';
import{RouterModule, Routes} from '@angular/router';
import { FormComponent } from './form/form.component';
const paths = [
  {
    path:'season'
    ,component:SeasonComponent
  },
  {
    path : 'comic'
    ,component : ComicsComponent
  },
 
    {
    path : ''
    ,component :SeriesComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SeriesComponent,
    SeasonComponent,
    ComicsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,  RouterModule.forRoot(paths)
  ],
  providers: [ServiceseriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
