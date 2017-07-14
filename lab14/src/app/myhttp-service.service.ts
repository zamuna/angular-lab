import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx'
import 'rxjs/add/operator/map'

@Injectable()
export class MyhttpServiceService {

  constructor(private http:Http) { }
// getMyData(url:string){
//   return this.http.get(url);
// }
getMyData(){
     let userResponse = this.http.get('https://jsonplaceholder.typicode.com/users/1').map(res => res.json());
    let postsResponse = this.http.get('https://jsonplaceholder.typicode.com/posts?userId=1').map(res => res.json());

    return Observable.forkJoin([userResponse, postsResponse]);
}
}
