import { NoopAnimationPlayer } from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { IAuthor } from 'src/app/shared/Model/AuthorDetails';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() player :any

@Output() authorId = new EventEmitter<string>();
  checkFav = false;
  favorites: IAuthor[] = [];
  test = [1,2,3,4,5,5,6,7]
  
  constructor() { }

  ngOnInit(): void {
   // console.log(this.player)
    this.checkFav = this.player.isFav;
    //console.log(this.favorites);
    //console.log(this.favorites);
    //console.log(this.checkFav);
    
  }

  addToFav(id:string){
    console.log('Adding');
    this.checkFav = !this.player.isFav;
    this.player.isFav = !this.player.isFav
    let data =   { name: this.player.name, 
      link: this.player.link, 
      bio: this.player.bio,
      quoteNo: this.player.quoteNo,
      id: this.player.id,
      isFav: this.checkFav
    }
    
      this.favorites.push(data);
      //console.log(this.favorites);
      let key = this.player.id
      //this.authorId.emit(key);

       localStorage.setItem( 'fav', JSON.stringify(data));
      // console.log(localStorage.hasOwnProperty('testFav'));

    console.log(id)

    
  }


  removeFromFav(id:string){
    console.log('removing');
    this.checkFav = !this.player.isFav;
    this.player.isFav = !this.player.isFav
    
    console.log(id)
  }

}
