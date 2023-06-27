import { Component, Input, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IUser } from 'src/app/user/models/IUser';
import { IPost } from 'src/app/user/models/IPost';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  public userData: IUser | any;
  public user: IUser | any;
  public posts: IPost[] | any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('Profile')
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From Profile', this.user.posts)
    this.posts = this.user.posts.filter((post: any) => post.category === 'cover');
  }
}
