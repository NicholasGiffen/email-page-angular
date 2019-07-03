import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; //added t his
import { Observable } from 'rxjs'; //added this

import { ActivatedRoute } from '@angular/router'; //new to this file. for detials.component.ts

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user$: Object;



  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.user$ = params.id) 
   }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    )
  }

}
