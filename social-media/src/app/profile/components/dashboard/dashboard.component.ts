import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IFollowing } from 'src/app/user/models/IFollowing';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  currentRoute: string = '';
  public userData: IUser | any;
  public user: IUser | any;
  public followers: IFollowers[] | any = [];
  public followings: IFollowing[] | any = [];
  public tempFollowers: IFollowers[] | any = [];
  public tempfollowings: IFollowing[] | any = [];
  public isMoreFollowers: boolean = true
  public isMoreFollowings: boolean = true
  constructor(private userService: UserService, private router: Router) {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url.substring(event.url.lastIndexOf('/') + 1);
          }
        });
  }


  currentFollowersIndex = 0
  handleClickFollowers() {
    for (let i = this.currentFollowersIndex; i < this.currentFollowersIndex + 2; i++) {
      if (i < this.followers.length) {
        this.tempFollowers.push(this.followers[i]);
      }
      if (this.currentFollowersIndex >= this.followers.length) {
        this.isMoreFollowers = false
      }
    }
    this.currentFollowersIndex += 2;
  }
  handleClickFollowersLess() {
    this.currentFollowersIndex = 0;
    this.tempFollowers = []
    this.isMoreFollowers = true
    this.handleClickFollowers()
  }

  currentFollowingsIndex = 0
  handleClickFollowing() {
    for (let i = this.currentFollowingsIndex; i < this.currentFollowingsIndex + 2; i++) {
      if (i < this.followings.length) {
        this.tempfollowings.push(this.followings[i]);
      }
      if (this.currentFollowingsIndex >= this.followings.length) {
        this.isMoreFollowings = false
      }
    }
    this.currentFollowingsIndex += 2;
  }
  handleClickFollowingLess() {
    this.currentFollowingsIndex = 0;
    this.tempfollowings = []
    this.isMoreFollowings = true
    this.handleClickFollowing()
  }


  ngOnInit(): void {
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
    console.log('From DashBoard', this.user)
    this.followers = this.userService.getFollowers(this.user.followers)
    console.log('From DashBoard', this.followers)
    this.followings = this.userService.getFollowings(this.user.following)
    console.log('From DashBoard', this.followings)
    this.handleClickFollowers()
    this.handleClickFollowing()
  }
  /* 
    onload() {
      this.userData = this.userService.getUserData()
      this.user = this.userService.getUser(this.userData.email)
      console.log('From DashBoard', this.user)
      this.followers = this.userService.getFollowers(this.user.followers)
      console.log('From DashBoard', this.followers)
      this.followings = this.userService.getFollowings(this.user.following)
      console.log('From DashBoard', this.followings)
    }
   */
}
