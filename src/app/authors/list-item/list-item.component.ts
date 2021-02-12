import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { IAuthor } from 'src/app/shared/Model/AuthorDetails';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() player :any
  @Output() FavChange = new EventEmitter<void>();
  
  checkFav = false;
  favorites: IAuthor[] = [];

  
  constructor() { }

  ngOnInit(): void {
    this.isFavCheck()
  }

  isFavCheck(){

    if(localStorage.hasOwnProperty('fav')){
      let localData = localStorage.getItem('fav');
      let data = JSON.parse(localData);
      console.log(data.id);
      if(this.player.id === data.id) this.checkFav = true;
     }

  }

  addToFav(id:string){
    console.log('Adding: ' +id);
    this.checkFav = !this.checkFav;

    let data =   { 
      name: this.player.name, 
      link: this.player.link, 
      bio: this.player.bio,
      quoteNo: this.player.quoteNo,
      id: this.player.id,
      isFav: this.checkFav
    }
    


       localStorage.setItem( 'fav', JSON.stringify(data));
       this.FavChange.emit()
       //this.ngOnInit()



    
  }


  removeFromFav(id:string){
    console.log('removing');
    this.checkFav = !this.checkFav;
    this.player.isFav = !this.player.isFav
    localStorage.removeItem('fav');
   this.FavChange.emit()
    //his.ngOnInit()
    console.log(id)
  }

}
