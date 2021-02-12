import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoriteauthor',
  templateUrl: './favoriteauthor.component.html',
  styleUrls: ['./favoriteauthor.component.scss']
})
export class FavoriteauthorComponent implements OnInit {

  @Input() author :any
  favAuthor = [];
  constructor() { }
test;
  ngOnInit(): void {
    this.getfavData();

  }

  getfavData(){

   // if(localStorage.hasOwnProperty())
    var localData = localStorage.getItem('fav');
    let data = JSON.parse(localData);
    this.favAuthor.push(data);
    this.test = data;
    console.log(this.favAuthor);

  }

}
