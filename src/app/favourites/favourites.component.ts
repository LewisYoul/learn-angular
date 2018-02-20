import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private dataService:DataService) {}

  favouritesData:any

  ngOnInit() {
    this.dataService.getFavourites().then(res => {
      this.favouritesData = res;
    })
  }

}
