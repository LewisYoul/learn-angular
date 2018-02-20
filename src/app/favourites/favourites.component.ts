import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private dataService:DataService) {}

  favouritesData:any;
  cloneArray:object[];
  test:any;

  dummyMovie:object = {
    original_title: "cool",
    overview: "lovely",
    poster_path: "somewhere"
  }

  ngOnInit() {
    this.dataService.getFavourites().then(res => {
      this.favouritesData = res;
    })
  }

  moveUp = (i) => {
    if (i > 0) {
      this.moveMovie(i, '-')
    }
  }

  moveDown = (i) => {
    if (i < this.favouritesData.length - 1) {
      this.moveMovie(i, '+')
    }
  }

  moveMovie = (i, action) => {
    this.cloneArray = this.favouritesData.slice()
    this.cloneArray[eval(`i ${action} 1`)] = this.favouritesData[i]
    this.cloneArray[i] = this.favouritesData[eval(`i ${action} 1`)]
    this.favouritesData = this.cloneArray
  }
}
