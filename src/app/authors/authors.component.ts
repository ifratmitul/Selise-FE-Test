import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../shared/Model/AuthorDetails';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  authors : IAuthor[];

  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){

    this.authorService.getAuthors().subscribe(res => {
      this.authors = res;
      console.log(this.authors)
    })

  }

}
