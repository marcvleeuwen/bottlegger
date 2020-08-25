import {Component, Input, OnInit} from '@angular/core';
import {PostData} from "./models/post-data.model";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() data: PostData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
