import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  public userData: IUser | any;
  public user: IUser | any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userData = this.userService.getUserData()
    this.user = this.userService.getUser(this.userData.email)
  }
}