import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MyGetService {
  private url = 'http://127.0.0.1:8080/calendar';

  constructor(private http: HttpClient) {
  }

  getSomething(): Observable<any> {

     // this.http.get<any>(this.url);
   return this.http.get(this.url, {responseType: 'text'});

  }
}
