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
  
  message: string;
  movie: any;
  movieFound: boolean;
  moviePoster: string;

  constructor(    
    private moviesService: MoviesService,
  ) { }

  ngOnInit() {
  }

  searchMovies(term: string): void {
    this.moviesService.search(term).subscribe(res => {
      if (res.Response === 'True') {
        this.movie = res
        if (this.movie.Poster != 'N/A') {
          this.moviePoster = this.movie.Poster
        } else {
          this.moviePoster = ''
        }
        this.movieFound = true
      } else {
        this.movieFound = false
        this.message = 'No movie was found that matched your search.'
      }
    });
    console.log(term, this.movie)
  }

}
