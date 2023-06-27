import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/user/models/IUser';
import { IPost } from 'src/app/user/models/IPost';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  public userData: IUser | any;
  public user: IUser | any;
  public posts: IPost[] | any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    console.log('Other')
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From Other', this.user.posts)
    this.posts = this.user.posts.filter((post: any) => post.category === 'other');
  }
}