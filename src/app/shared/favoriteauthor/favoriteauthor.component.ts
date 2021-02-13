import { Component, OnInit } from '@angular/core';
import { FavoriteAuthorService } from './favorite-author.service';

@Component({
  selector: 'app-favoriteauthor',
  templateUrl: './favoriteauthor.component.html',
  styleUrls: ['./favoriteauthor.component.scss']
})
export class FavoriteauthorComponent implements OnInit {


  favAuthor = [];
  //test = [];
  constructor(private FavService: FavoriteAuthorService) { }

  ngOnInit(): void {
    this.getFavData();

    this.FavService.test.subscribe( res => {
        this.getFavData()
    })

  }

  getFavData(){
    this.favAuthor = [];

   if(localStorage.hasOwnProperty('fav')){
    var localData = localStorage.getItem('fav');
    let data = JSON.parse(localData);

    this.favAuthor.push(data);

   }
   else this.favAuthor = [];





  }
}




