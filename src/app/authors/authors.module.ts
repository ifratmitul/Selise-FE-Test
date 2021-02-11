import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { ListItemComponent } from './list-item/list-item.component';

import { AuthorDetailsComponent } from './author-details/author-details.component';
import { RouterModule } from '@angular/router';
import { AuthorsRoutingModule } from './authors-routing.module';





@NgModule({
  declarations: [AuthorsComponent, ListItemComponent, AuthorDetailsComponent],
  imports: [
    CommonModule,
AuthorsRoutingModule

  ],
// exports:[AuthorsComponent]
})
export class AuthorsModule { }
