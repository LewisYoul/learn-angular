import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  searchMovieDb() {
    return this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=121486b23802e0b6735125ff1892f340')
      .toPromise()
      .then(res => {
        console.log(res.results)
        return res
      });
  }
}
