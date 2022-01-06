import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    this.reviewState = this.router.getCurrentNavigation().extras.state
   }

  reviewState: any;

  ngOnInit(): void {
    console.log(this.reviewState);
  }
}
