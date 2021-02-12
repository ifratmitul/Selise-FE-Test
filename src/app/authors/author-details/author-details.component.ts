import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.scss']
})
export class AuthorDetailsComponent implements OnInit {

  authorDetails; 

  name : string;
  quoteNo : number
  quotes = [];

  constructor(private authorService: AuthorsService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){

    this.authorService.getAuthorDetails(this.activateRoute.snapshot.paramMap.get('id')).subscribe(res => {
      
      console.log(res);
      this.name = res['name'];
      this.quoteNo = res['quoteCount'];
      for(var i = 0; i < res['quotes'].length; i+=1){
        this.quotes.push(res['quotes'][i]['content'])
      }
      console.log(this.quotes);
      


    })

  }

}
