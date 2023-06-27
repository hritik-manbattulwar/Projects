import { Component, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  public userData: IUser | any;
  public user: IUser | any;
  public followers: IFollowers | any;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From Followers', this.user)
    this.followers = this.userService.getFollowers(this.user.followers)
    console.log('From Followers', this.followers)
  }

  addFollower(follower: IFollowers) {
    this.userService.addFollowing(follower.email)
    this.loadData()


  }

}



