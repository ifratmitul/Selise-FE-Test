import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
 
  pageNumber : number;
  constructor(private authorService: AuthorsService) { }

  ngOnInit(): void {
    this.getData();
    this.pageNumber = 1
  }

  getData(){

    this.authorService.getAuthors(this.authorParam).subscribe(res => {
      this.authors = res;
       console.log(this.authors)

    })

  }

  onPageChange(){

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

  checkEmmit(){
  this.ngOnInit()
    
  }

}
