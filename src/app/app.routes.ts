import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent,
    title: 'Home page',
  },
  {
    path: 'movies',
    component: MoviesComponent,
    title: 'movies listing',
  },
  {
    path: 'movies/:id',
    component: DetailsComponent,
    title: 'movie details',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
export default routes;
