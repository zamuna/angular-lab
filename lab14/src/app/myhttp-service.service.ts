import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export class MyhttpServiceService {

  constructor(private http:Http) { }
getMyData(url:string){
  return this.http.get(url);
}
}
