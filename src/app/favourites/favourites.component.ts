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
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[i - 1] = this.favouritesData[i]
      this.cloneArray[i] = this.favouritesData[i - 1]
      this.favouritesData = this.cloneArray
    }
  }

  moveDown = (i) => {
    if (i < this.favouritesData.length - 1) {
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[i + 1] = this.favouritesData[i]
      this.cloneArray[i] = this.favouritesData[i + 1]
      this.favouritesData = this.cloneArray
    }
  }

}
