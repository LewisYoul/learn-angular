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

  someProperty:string = '';

  ngOnInit() {
    this.someProperty = this.dataService.searchMovieDb();
  }

  title = 'Movie App';

  toggleImage(event) {
    this.imageStatus = !this.imageStatus
  }
}
