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
  cloneArray:any;
  dummyMovie:any;

  ngOnInit() {
    this.dataService.getFavourites().then(res => {
      this.favouritesData = res;
    })
  }

  moveUp = (ranking) => {
    if (ranking > 1) {
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[ranking - 2] = this.favouritesData[ranking - 1]
      this.cloneArray[ranking - 1] = this.favouritesData[ranking - 2]
      this.cloneArray[ranking - 2]['ranking'] = ranking - 1
      this.cloneArray[ranking - 1]['ranking'] = ranking
      this.favouritesData = this.cloneArray
    }
  }

  moveDown = (ranking) => {
    if (ranking < this.favouritesData.length) {
      this.cloneArray = this.favouritesData.slice()
      this.cloneArray[ranking - 1] = this.favouritesData[ranking]
      this.cloneArray[ranking] = this.favouritesData[ranking - 1]
      this.cloneArray[ranking - 1]['ranking'] = ranking
      this.cloneArray[ranking]['ranking'] = ranking + 1
      this.favouritesData = this.cloneArray
    }
  }

  saveRatings = (favs) => {
    this.favouritesData.forEach((movie) => {
      this.dataService.updateRatings(movie)
    });
  }

}
