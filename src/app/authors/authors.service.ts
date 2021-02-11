import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private baseUrl = 'http://api.quotable.io';

  constructor(private http:HttpClient) { }

  getAuthors(){
    return this.http.get(this.baseUrl+'/authors').pipe(
      map( resData => {
        const data = [];
        console.log(resData)
        for(var i =0; i < resData['results'].length; i+= 1){

          var name = resData['results'][i]['name'];
          var link = resData['results'][i]['link'];
          var bio = resData['results'][i]['bio'];
          var quoteno = resData['results'][i]['quoteCount'];
          var _id = resData['results'][i]['_id'];

          data.push({name: name, link: link, bio:bio, quoteNo: quoteno, id: _id, isFav: false})
          

        }

        return data;

      })
    )
}

}