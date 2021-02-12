import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDetailsComponent } from './author-details/author-details.component';

const routes: Routes = [
  {path:':id', component: AuthorDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }


//  {path:'author/:id', component: AuthorDetailsComponent},