import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { ListItemComponent } from './list-item/list-item.component';

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorsRoutingModule } from './authors-routing.module';






@NgModule({
  declarations: [AuthorsComponent, ListItemComponent, AuthorDetailsComponent],
  imports: [
    CommonModule,
AuthorsRoutingModule

  ],
  exports:[ListItemComponent]
})
export class AuthorsModule { }
