import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dataService:DataService) {

  }

  movieData:any = [];

  ngOnInit() {
    this.dataService.searchMovieDb().then(
      res => {
        console.log(res)
        this.movieData = res
      }
    )
  }

  title = 'Movie App';

  toggleImage(event) {
    this.imageStatus = !this.imageStatus
  }
}
