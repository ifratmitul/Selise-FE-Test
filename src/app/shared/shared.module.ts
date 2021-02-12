import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteauthorComponent } from './favoriteauthor/favoriteauthor.component';
import { AuthorsModule } from '../authors/authors.module';

@NgModule({
  declarations: [FavoriteauthorComponent],
  imports: [
    CommonModule,
    AuthorsModule

  ],
  exports: [FavoriteauthorComponent]
})
export class SharedModule { }
