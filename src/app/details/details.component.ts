import { Component, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { MovieDetailsInfo } from '../moviedetails';
import { BudgetPipe } from '../budget.pipe';
import { DurationPipe } from '../duration.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, BudgetPipe, DurationPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    movieService = inject(MovieService);
    movieDetails: MovieDetailsInfo | undefined;

    constructor() {
        const movieDetailsId = this.route.snapshot.params['id'];
        this.movieService.getMovieById(movieDetailsId).subscribe((movieDetails) => {
          this.movieDetails = movieDetails;
        });
    }
}
