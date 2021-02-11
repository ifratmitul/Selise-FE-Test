import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthorParams } from '../shared/Model/authorParams';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private baseUrl = 'http://api.quotable.io';

  constructor(private http:HttpClient) { }

  getAuthors(authorParams : AuthorParams){
    let params = new HttpParams();
    if(authorParams.limit) params = params.append('limit', authorParams.limit.toString())
    if(authorParams.skip) params = params.append('skip', authorParams.skip.toString())

    return this.http.get(this.baseUrl+'/authors', {observe: 'response', params}).pipe(
      map( res => {

        // res.body;
        const data = [];
        var resData =res.body;

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

getAuthorDetails(id:string){
  return this.http.get(this.baseUrl+'/authors/'+id)
}

}