import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

  searchMovieDb(title) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=121486b23802e0b6735125ff1892f340&query=${title}`)
      .toPromise()
      .then(res => {
        console.log(res)
        return res.results
      });
  }


}
