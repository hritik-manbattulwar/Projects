import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/models/IUser';
import { IPost } from '../user/models/IPost';
import { UserService } from '../user/services/user.service';
import * as moment from 'moment';
import { IFollowing } from '../user/models/IFollowing';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public user: IUser | any;
  public posts: IPost[] | any;
  public followings: IFollowing[] | any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getUserData()
    this.user = this.userService.getUser(this.user.email)
    this.followings = this.userService.getFollowings(this.user.following)
    this.posts = this.userService.getPosts(this.followings)
    console.log('From FEED', this.user)
    console.log('From FEED', this.posts)
    console.log('From FEED', this.followings)

  }

  getPostedDate(date: Date): string {
    return moment(date).fromNow()
  }
}
