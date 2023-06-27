import { Component } from '@angular/core';
import { IUser } from '../../models/IUser';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public isEmpty: boolean | any;
  public isSubmitted: boolean | any;
  public isApiFailed: boolean = false;
  public message: string = '';
  public user: IUser = {
    email: '',
    password: '',
  }
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }
  public loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
  })

  public getEmail() {
    return this.loginForm.get('email');
  }

  public getPassword() {
    return this.loginForm.get('password');
  }

  public loginUser() {

    let user: IUser | any = this.loginForm.value
    if (this.loginForm.status === "VALID") {
      console.log(this.loginForm)
      this.isEmpty = false;
      this.userService.loginUser(user).subscribe((data) => {
        this.message = data.result;
        this.isSubmitted = true;
        console.log(data.user)
        localStorage.setItem("user", JSON.stringify(data.user))
        setTimeout(() => {
          this.router.navigate(['/profile/dashboard'])
        }, 1000)
      }, (error) => {
        console.log(error)
        this.isApiFailed = true;
        setTimeout(() => {
          this.isApiFailed = false;
        }, 2000)
      })
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
      setTimeout(() => {
        this.isEmpty = false;
      }, 2000)
    }

  }
  public login() {

    let user: IUser | any = this.loginForm.value
    if (this.loginForm.status === "VALID") {
      console.log(this.loginForm)
      this.isEmpty = false;
      let result = this.userService.login(user);
      this.isSubmitted = true;
      if (result === 'success') {
        this.message = 'Login Success'
        let data = this.userService.getUser(user.email)
        localStorage.setItem("user", JSON.stringify(data))
        setTimeout(() => {
          this.router.navigate(['/profile/dashboard/timeline'])
        }, 1000)
      }
      else if (result === 'not exists') {
        this.message = "User Doesn't Exists"
        setTimeout(() => {
          this.router.navigate(['/user/register'])
        }, 1000)
      }
      else {
        this.message = "Invalid Credentials"
      }
    }
    else {
      this.isEmpty = true;
      this.isSubmitted = false;
      setTimeout(() => {
        this.isEmpty = false;
      }, 2000)
    }

  }
}
