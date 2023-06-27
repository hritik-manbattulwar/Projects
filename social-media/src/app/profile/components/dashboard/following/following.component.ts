import { Component, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IFollowing } from 'src/app/user/models/IFollowing';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  public userData: IUser | any;
  public user: IUser | any;
  public followings: IFollowing | any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From Following', this.user)
    this.followings = this.userService.getFollowings(this.user.following)
    console.log('From Following', this.followings)
  }




}



