import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { DataService } from './data.service';
import { TitleComponent } from './title/title.component'

@NgModule({
  declarations: [
    AppComponent,
    SubHeadingComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
