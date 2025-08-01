import { Component, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, TitleCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../movie.service';
import { MovieSummaryInfo } from '../moviesummary';
import { DurationPipe } from '../duration.pipe';
import { BudgetPipe } from '../budget.pipe';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe, TitleCasePipe, RouterLink, DurationPipe, BudgetPipe, FormsModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  movieSummaryList: MovieSummaryInfo[] = [];
  movieService: MovieService = inject(MovieService);
  filterTitle = '';
  filterYear = '';

  constructor() {
     this.movieService.getAllMovies().subscribe(data => {
       this.movieSummaryList = data;
     });
  }

  get filteredMovies():MovieSummaryInfo[] {
    return this.movieSummaryList.filter(movieSummary =>
      movieSummary?.title.toLowerCase().includes(this.filterTitle.toLowerCase()) &&
      movieSummary?.release_date.substring(0,4).includes(this.filterYear)
    );
  }
}
