import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { DataService } from './data.service';
import { TitleComponent } from './title/title.component';
import { MovieSearchFormComponent } from './movie-search-form/movie-search-form.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { IndexComponent } from './index/index.component'

const appRoutes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'favourites', component: FavouritesComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    SubHeadingComponent,
    TitleComponent,
    MovieSearchFormComponent,
    FavouritesComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
