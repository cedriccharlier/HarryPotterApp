import { MovieSummaryInfo } from './moviesummary';

export interface MovieDetailsInfo extends MovieSummaryInfo {
  box_office: string;
  cinematographers: string[];
  poster: string;
  producers: string[];
  summary: string;
}
