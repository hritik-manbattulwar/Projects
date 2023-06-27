import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../models/IUser';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public isEmpty: boolean | any;
  public isSubmitted: boolean | any;
  public isApiFailed: boolean = false;
  public message: string = '';
  public user: IUser = {
    name: '',
    email: '',
    password: '',
  }
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  public registrationForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+ [a-zA-Z]+$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{6,16}$')]],
  })



  public getUsername() {
    return this.registrationForm.get('name');
  }

  public getEmail() {
    return this.registrationForm.get('email');
  }

  public getPassword() {
    return this.registrationForm.get('password');
  }

  public submitUser() {
    /* let user = {
      username : this.getUsername().value,
      email : this.getEmail().value,
      password : this.getPassword().value,
      course : this.getCourse().value
    };  */
    let user: IUser | any = this.registrationForm.value
    if (this.registrationForm.status === "VALID") {
      // console.log(this.registrationForm)
      this.isEmpty = false;
      this.userService.register(user);
      this.userService.registerUser(user).subscribe((data) => {
        this.message = data.result;
        this.isSubmitted = true;
      }, (error) => {
        this.isApiFailed = true;
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
  public submit() {
    /* let user = {
      username : this.getUsername().value,
      email : this.getEmail().value,
      password : this.getPassword().value,
      course : this.getCourse().value
    };  */
    let user: IUser | any = this.registrationForm.value
    if (this.registrationForm.status === "VALID") {
      // console.log(this.registrationForm)
      this.isEmpty = false;
      let msg = this.userService.register(user);
      this.isSubmitted = true
      if (msg === 'success')
        this.message = 'Registration is Successfull'
      else if (msg === 'exists')
        this.message = 'User Already Exists'
      else
        this.message = 'Error Occocured! Try Some Time Later'
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
