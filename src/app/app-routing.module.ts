import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';

const routes: Routes = [
  {path:'', component: AuthorsComponent},
  {path:'author', loadChildren: () => import('./authors/authors.module').then(mod => mod.AuthorsModule)},

  {path: '**', redirectTo: '' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
