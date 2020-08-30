import {Component, Input, OnInit} from '@angular/core';
import {PostData} from './models/post-data.model';
import * as moment from 'Moment';

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

  postAge(timestamp: string): string {
    return moment(timestamp).fromNow() || 'unknown time';
  }

}
