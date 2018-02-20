import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService) {}

  movieData:any
  showSubHeading = true;
  loggedIn = false;

  toggleLogIn = (event) => {
    this.loggedIn = !this.loggedIn
  }

  onMovieSearch = (res) => {
    this.movieData = res
    console.log(this.movieData)
  }

  saveMovie = (event, movie) => {
    event.preventDefault();
    console.log("I'M THE SAVED MOVIE", movie)
    this.dataService.postMovieToDb(movie)
  }
}
