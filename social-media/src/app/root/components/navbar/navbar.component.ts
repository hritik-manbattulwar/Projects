import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  public user: any;
  public data: IUser | any;

  constructor(private zone: NgZone, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  public isLogin() {
    this.zone.run;
    return this.userService.isLoggedIn();
  }

  public clickLogout() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }

  public getUser() {
    this.user = this.userService.getUserData();
  }

  public getData() {
    this.data = this.userService.getUser(this.user.email)
  }
}
