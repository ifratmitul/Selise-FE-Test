import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FavoriteAuthorService } from './favorite-author.service';

@Component({
  selector: 'app-favoriteauthor',
  templateUrl: './favoriteauthor.component.html',
  styleUrls: ['./favoriteauthor.component.scss']
})
export class FavoriteauthorComponent implements OnInit {

  @Input() author :any

  favAuthor = [];
  constructor(private FavService: FavoriteAuthorService) { }

  ngOnInit(): void {
    this.getFavData();

    this.FavService.test.subscribe( res => {
        this.getFavData()
    })

  }

  getFavData(){

   if(localStorage.hasOwnProperty('fav')){
    var localData = localStorage.getItem('fav');
    let data = JSON.parse(localData);
    console.log(data);

    this.favAuthor.push(data);
    
    
    // this.FavService.getStoredData();
    // this.FavService.FavData.subscribe(res => {
    //   console.log(res);
      
    //   this.favAuthor.push(res);
    // })
    

   }
   else this.favAuthor = [];





  }
}




