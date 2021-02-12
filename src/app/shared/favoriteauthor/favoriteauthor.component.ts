import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-favoriteauthor',
  templateUrl: './favoriteauthor.component.html',
  styleUrls: ['./favoriteauthor.component.scss']
})
export class FavoriteauthorComponent implements OnInit {

  @Input() author :any

  favAuthor = [];
  constructor() { }

  ngOnInit(): void {
    this.getfavData();

  }

  getfavData(){

   if(localStorage.hasOwnProperty('fav')){
    var localData = localStorage.getItem('fav');
    let data = JSON.parse(localData);
    this.favAuthor.push(data);
    
    console.log(this.favAuthor);
   }




  }

  reload(){
    console.log('checking emit');
    
    // this.getfavData();
    this.ngOnInit();

  }

}
