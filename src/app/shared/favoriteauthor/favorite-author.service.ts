import { EventEmitter, Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoriteAuthorService {

  constructor() { 
    console.log('in fav service');
    
  }

  test = new Subject<void>();

  // FavData = new Subject<{}>()

  // getStoredData(){

  //   if(localStorage.hasOwnProperty('fav')){
  //     var localData = localStorage.getItem('fav');
  //     let data = JSON.parse(localData);

  //     this.FavData.next(data);

  //   }
  // }
}
