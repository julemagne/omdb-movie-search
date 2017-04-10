import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent }   from './movies/movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search',  component: MoviesComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
