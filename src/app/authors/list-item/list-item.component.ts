import { NoopAnimationPlayer } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() player :any


  checkFav = false;

  
  constructor() { }

  ngOnInit(): void {
  }

  addToFav(id:string){
    console.log('Adding');
    this.player.isFav = !this.player.isFav
    console.log(id)
  }


  removeFromFav(id:string){
    console.log('removing');
    this.player.isFav = !this.player.isFav
    
    console.log(id)
  }

}
