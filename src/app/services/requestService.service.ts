import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {INews} from "../interfaces/news.interface";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  api: string;

  constructor(private http: HttpClient) {
    this.api = environment.apiUrl;
  }

  getNews(): Observable<INews[]>{
    return of([{
      title: 'title',
      description: 'text',
      date: 'date',
    }]);
  }

  private sendRequest(action: string, data: any = {}, verb: string = 'post'): Observable<any>{
    return this.http.post(
      `${this.api}/${action}`,
      'data=' + JSON.stringify(data),
      {headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        responseType: 'text'});
  }
}
