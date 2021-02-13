import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FavoriteAuthorService } from '../shared/favoriteauthor/favorite-author.service';
import { IAuthor } from '../shared/Model/AuthorDetails';
import { AuthorParams } from '../shared/Model/authorParams';
import { AuthorsService } from './authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  @Output() Test = new EventEmitter<void>();
  authors : IAuthor[];

  authorParam = new AuthorParams();
  isLoading = false;
  pageNumber : number;
  constructor(private authorService: AuthorsService, private FavService : FavoriteAuthorService) { }

  ngOnInit(): void {
    this.FavService.test.subscribe( res => {
      this.getData();
  })
    this.getData();
    this.pageNumber = 1
  }

  getData(){
    this.isLoading = true;
    this.authorService.getAuthors(this.authorParam).subscribe(res => {
      this.authors = res;
      this.isLoading = false;
       //console.log(this.authors)

    },
    err => {
      console.log(err);
      this.isLoading = false;
    })

  }

  onPageChange(){
    //by default i put limit to 10, for each page tho show 10 data. 
    this.authorParam.skip += 10;
    this.pageNumber++;
    this.getData();

  }

  OnPrevious(){

    if(this.pageNumber != 1){
      this.authorParam.skip -= 10;
      this.pageNumber--;
      this.getData();
  

    }

  }



}
