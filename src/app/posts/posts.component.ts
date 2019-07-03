import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //added t his
import { Observable } from 'rxjs'; //added this

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  posts$: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )


  }

}
