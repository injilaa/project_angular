import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ServiceseriesService {


baseurl: string = 'http://localhost:2000/api/v1/post_series';
_url:string = 'http://localhost:2000/api/v1/post_season';
_url2:string = 'http://localhost:2000/api/v1/post_comic';
  variable: string;
  constructor(public httpService: Http) { }

get_series(): Observable<any> {

    return this.httpService.get(this.baseurl).map(
      res => res.json()
    );
  }
get_seasons(): Observable<any> {

    return this.httpService.get(this._url).map(
      res => res.json()
    );
  }


get_comics(): Observable<any> {

    return this.httpService.get(this._url2).map(
      res => res.json()
    );
  }




}
