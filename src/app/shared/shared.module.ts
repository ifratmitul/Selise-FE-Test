import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteauthorComponent } from './favoriteauthor/favoriteauthor.component';



@NgModule({
  declarations: [FavoriteauthorComponent],
  imports: [
    CommonModule
  ],
  exports: [FavoriteauthorComponent]
})
export class SharedModule { }
