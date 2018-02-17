import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie-search-form',
  templateUrl: './movie-search-form.component.html',
  styleUrls: ['./movie-search-form.component.css']
})
export class MovieSearchFormComponent implements OnInit {

  constructor(private dataService:DataService) { }
  @Output() onMovieSearch = new EventEmitter<any>();

  ngOnInit() {
  }

  findMovie = (event) => {
    event.preventDefault()
    var movieInput = document.getElementById('movie')['value']
    this.dataService.searchMovieDb(movieInput).then(
      res => {
        console.log(res)
        this.onMovieSearch.emit(res);
      }
    )
    document.getElementById('movie')['value'] = ''
  }

}
