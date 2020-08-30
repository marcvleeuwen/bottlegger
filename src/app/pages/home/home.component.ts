import {Component, OnInit} from '@angular/core';
import {PostData} from "../../components/post-card/models/post-data.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<PostData> = [
    {
      comments: [],
      location: '',
      userData: {
        username: 'user1',
        profilePicture: 'https://images.unsplash.com/photo-1598330596736-569ac71ce972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
        ID: '0'
      },
      image: 'https://images.unsplash.com/photo-1598318607852-5b5106a48d02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      description: 'this is the description for post 1',
      postId: '0',
      postUrl: '',
      timestamp: new Date('2020/08/29').toISOString()
    },{
      comments: [],
      location: '',
      userData: {
        username: 'user1',
        profilePicture: 'https://images.unsplash.com/photo-1598330596736-569ac71ce972?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
        ID: '0'
      },
      image: 'https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'this is the description for post 1',
      postId: '0',
      postUrl: '',
      timestamp: new Date('2020/08/29').toISOString()
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
