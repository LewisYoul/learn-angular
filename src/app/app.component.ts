import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Hey guys!</h1>
  <ul>
    <li *ngFor="let things of thingsIlike">{{ things }}</li>
  </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first Angular App!';
  thingsIlike = ['Cycling', 'Tennis', 'Programming'];
}
