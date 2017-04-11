import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  private omdb = 'http://www.omdbapi.com/?t=';

  constructor(private http: Http) { }

  search(term: string): Observable<any> {
    return this.http.get(this.omdb + term + '&plot=full')
      .map(response => {
        return response.json() as string
    })
  }

}
