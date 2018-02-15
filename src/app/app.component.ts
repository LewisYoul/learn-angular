import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Angular App!';
  thingsIlike = ['Cycling', 'Tennis', 'Programming'];
  people = [
    {
      name: "John",
      age: 25,
      sport: "Football"
    },
    {
      name: "Tim",
      age: 32,
      sport: "Cycling"
    },
    {
      name: "Lewis",
      age: 29,
      sport: "Tennis"
    }
  ];
  buttonStatus = false;
  imageUrl = "/assets/images/lewis.jpg";
  imageStatus = true;

  toggleImage(event) {
    this.imageStatus = !this.imageStatus
  }
}
