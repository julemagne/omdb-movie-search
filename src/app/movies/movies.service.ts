import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviesService {

  private omdb = 'http://www.omdbapi.com/?t=labyrinth';

  constructor(private http: Http) { }

  search(term): Observable<any> {
    return this.http.get(this.omdb)
      .map(response => response.json() as string)
  }

}
