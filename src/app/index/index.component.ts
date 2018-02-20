import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private dataService:DataService) {}

  movieData:any
  showSubHeading = true;
  loggedIn = false;

  onMovieSearch = (res) => {
    this.movieData = res
    console.log(this.movieData)
  }

  saveMovie = (event, movie) => {
    event.preventDefault();
    console.log("I'M THE SAVED MOVIE", movie)
    this.dataService.postMovieToDb(movie)
  }

  toggleLogIn = (event) => {
    this.loggedIn = !this.loggedIn
  }
}
