import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/user/services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  title = 'angular13bestcode';



  personalDetails!: FormGroup;
  addressDetails!: FormGroup;
  educationalDetails!: FormGroup;
  multiform!: FormGroup;
  personal_step = false;
  address_step = false;
  education_step = false;
  step = 1;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {



    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      avatar: ['', Validators.required],
      coverPhoto: ['', Validators.required],
      email: ['', Validators.required],
      nickname: ['', Validators.required],
      primaryPhone: ['', Validators.required],
      secondaryPhone: [''],
      gender: [, Validators.required],
      dob: ['', Validators.required],
      languages: ['', Validators.required],
      aboutYou: ['', Validators.required],
      favouriteQuote: ['', Validators.required],
      instagram: ['', Validators.required],
      twitter: ['', Validators.required],
      website: ['', Validators.required],
    });

    this.addressDetails = this.formBuilder.group({
      currentCity: ['', Validators.required],
      currentState: ['', Validators.required],
      homeCity: ['', Validators.required],
      homeState: ['', Validators.required],
      country: ['', Validators.required],
    });

    this.educationalDetails = this.formBuilder.group({
      designation: ['', Validators.required],
      organization: ['', Validators.required],
      college: ['', Validators.required],
      highSchool: ['', Validators.required],
      school: ['', Validators.required]
    });

    this.multiform = new FormGroup({
      personal: this.personalDetails,
      address: this.addressDetails,
      education: this.educationalDetails,
    })
  }

  get personal() { return this.personalDetails.controls; }

  get address() { return this.addressDetails.controls; }

  get education() { return this.educationalDetails.controls; }
  next() {

    if (this.step == 1) {
      this.personal_step = true;
      if (this.personalDetails.invalid) { return }
      this.step++
    }

    else if (this.step == 2) {
      this.address_step = true;
      if (this.addressDetails.invalid) { return }
      this.step++;
    }


  }

  previous() {
    this.step--

    if (this.step == 1) {
      this.address_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }

  }

  submit() {

    if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      else {
        this.userService.editProfile(this.multiform.value)
      }
    }
  }
}