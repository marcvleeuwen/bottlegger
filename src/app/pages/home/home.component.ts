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
      comments: [
        {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }, {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }, {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }
      ],
      location: '',
      userData: {
        username: 'Ploppies',
        profilePicture: `https://randomuser.me/api/portraits/women/${this.randomId()}.jpg`,
        ID: '0'
      },
      image: 'https://images.unsplash.com/photo-1598318607852-5b5106a48d02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
      description: 'this is the description for post 1',
      postId: '0',
      postUrl: '',
      timestamp: new Date('2020/08/29').toISOString(),
      isFavorite: true
    }, {
      comments: [],
      location: '',
      userData: {
        username: 'Marilyn_',
        profilePicture: `https://randomuser.me/api/portraits/women/${this.randomId()}.jpg`,
        ID: '1'
      },
      image: 'https://images.unsplash.com/photo-1558981000-f294a6ed32b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
      description: 'this is the description for post 2',
      postId: '1',
      postUrl: '',
      timestamp: new Date('2020/08/30').toISOString(),
      isFavorite: false
    }, {
      comments: [
        {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }, {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }, {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }
      ],
      location: '',
      userData: {
        username: 'SpiderMan',
        profilePicture: `https://randomuser.me/api/portraits/men/${this.randomId()}.jpg`,
        ID: '2'
      },
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'this is the description for post 2',
      postId: '2',
      postUrl: '',
      timestamp: new Date('2020/08/30').toISOString(),
      isFavorite: true
    }, {
      comments: [],
      location: '',
      userData: {
        username: 'wonderWoman',
        profilePicture: `https://randomuser.me/api/portraits/women/${this.randomId()}.jpg`,
        ID: '3'
      },
      image: 'https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'this is the description for post 2',
      postId: '3',
      postUrl: '',
      timestamp: new Date('2020/07/30').toISOString(),
      isFavorite: false
    }, {
      comments: [
        {
          timestamp: new Date().toISOString(),
          username: '',
          profilePicture: '',
          replies: []
        }
      ],
      location: '',
      userData: {
        username: 'Billy_bob',
        profilePicture: `https://randomuser.me/api/portraits/men/${this.randomId()}.jpg`,
        ID: '4'
      },
      image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      description: 'this is the description for post 2',
      postId: '4',
      postUrl: '',
      timestamp: new Date('2020/08/31').toISOString(),
      isFavorite: false
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  randomId(): number {
    return Math.floor((Math.random() * 99));
  }

  onPostMenuClicked(postId: string): void {
    alert(`open button sheet as overlay for post ${postId}`);
  }

}
