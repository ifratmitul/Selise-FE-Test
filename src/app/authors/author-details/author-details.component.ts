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
  constructor(private authorSerice: AuthorsService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){

    this.authorSerice.getAuthorDetails(this.activateRoute.snapshot.paramMap.get('id')).subscribe(res => {
      
      this.authorDetails = res;
      console.log(this.authorDetails);

    })

  }

}
