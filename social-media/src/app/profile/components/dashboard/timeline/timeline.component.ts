import { Component, OnInit } from '@angular/core';
import { IFollowers } from 'src/app/user/models/IFollowers';
import { IUser } from 'src/app/user/models/IUser';
import { UserService } from 'src/app/user/services/user.service';
import * as moment from 'moment';
import { IPost } from 'src/app/user/models/IPost';
import { IFollowing } from 'src/app/user/models/IFollowing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  public user: IUser | any;
  public posts: IPost | any;
  public post: IPost | any;
  public isEmpty: boolean = false;
  public isSubmitted: boolean = false;
  constructor(private userService: UserService) { }


  public postForm = new FormGroup({
    image: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required]),
    date: new FormControl(new Date(), [Validators.required]),
    category: new FormControl('other', [Validators.required])
  })

  public postSubmit() {
    // let user: IUser | any = this.postForm.value
    if (this.postForm.status === "VALID") {
      console.log(this.postForm)
      let post: IPost | any = {}
      post.image = this.imageSrc;
      post.caption = this.postForm.value.caption;
      post.likeCount = 0;
      post.commentCount = 0;
      post.shareCount = 0;
      post.uploadDate = new Date();
      post.category = this.postForm.value.category;
      this.userService.createPost(post)
      this.postForm.reset()
      this.imageSrc = ''
      this.isSubmitted = true;
      setTimeout(() => {
        this.isSubmitted = false;
      }, 2000)
    }
    else {
      this.isEmpty = true
      setTimeout(() => {
        this.isEmpty = false
      }, 2000)
    }
  }


  // selectProductImage
  public selectImage(event: any) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let reader = new FileReader();
      reader.readAsDataURL(file);
      //this.imageFileName = file;
      reader.addEventListener('load', () => {
        return reader.result ? this.postForm.value.image = String(reader.result) : '';
      });
    }
  }



  imageSrc: string | any = '';
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      reader.readAsDataURL(file);
    }
  }

  public getImage() {
    return this.postForm.get('image');
  }
  public getCaption() {
    return this.postForm.get('caption');
  }



  ngOnInit(): void {
    this.user = this.userService.getUserData()
    this.user = this.userService.getUser(this.user.email)

    this.posts = this.user.posts
    console.log('From Timeline', this.user)
    console.log('From Timeline', this.posts)

  }

  getPostedDate(date: Date): string {
    return moment(date).fromNow()
  }


}
