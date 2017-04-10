import { Component, OnInit } from '@angular/core';

import { Observable }        from 'rxjs/Observable';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MoviesService]
})
export class MoviesComponent implements OnInit {
  
  movie: Object;

  constructor(    
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
  }

  searchMovies(): void {
    this.moviesService.search('').subscribe(res => this.movie = res);
    console.log(this.movie)
  }

}
