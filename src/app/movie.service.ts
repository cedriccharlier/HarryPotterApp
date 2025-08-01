import { Injectable } from '@angular/core';
import { MovieSummaryInfo } from './moviesummary';
import { MovieDetailsInfo } from './moviedetails';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly API_URL = '/movies';

  constructor(private http: HttpClient) {}

  // Get all movies (summary)
  getAllMovies(): Observable<MovieSummaryInfo[]> {
    return this.http.get<MovieSummaryInfo[]>(this.API_URL);
  }

  // Get movie by ID (full details)
  getMovieById(id: string): Observable<MovieDetailsInfo | undefined> {
    return this.http.get<MovieDetailsInfo | undefined>(`${this.API_URL}/${id}`);
  }
}
