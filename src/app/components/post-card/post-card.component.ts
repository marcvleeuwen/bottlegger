import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PostData} from './models/post-data.model';
import * as moment from "moment";

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {

  @Input() data: PostData;
  @Output() postMenuClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  postAge(timestamp: string): string {
    return moment(timestamp).fromNow() || 'unknown time';
  }

  onFavoriteClick(): void {
    this.data.isFavorite = !this.data.isFavorite;
  }

  onPostMenuClick(postId: string): void {
    this.postMenuClicked.emit(postId);
  }

}
