import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsComponent } from './authors.component';
import { ListItemComponent } from './list-item/list-item.component';




@NgModule({
  declarations: [AuthorsComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
exports:[AuthorsComponent]
})
export class AuthorsModule { }
