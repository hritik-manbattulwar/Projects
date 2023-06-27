import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IUser } from '../models/IUser';
import { users } from '../models/users';
import { IFollowers } from '../models/IFollowers';
import { followers } from '../models/followers';
import { following } from '../models/following';
import { IFollowing } from '../models/IFollowing';
import { IPost } from '../models/IPost';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  // register a user
  public registerUser(user: IUser): Observable<{ result: string }> {
    let dataURL: string = `http://127.0.0.1:3000/user/register`;
    return this.httpClient.post<{ result: string }>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public register(user: IUser): string {
    try {
      if (users.find((u) => u.email === user.email)) {
        return 'exists'
      } else {
        user.avatar = 'https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Free-Download.png'
        user.coverPhoto = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEA8PDQ8QDQ0NDw8NDQ0NDxANDQ0NFRIWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lFx0tKysrLS0tLS0tLS0rKystLSstLS0tLS0rNy0tNy0tKzc3KystKy0rLSsrKystKysrK//AABEIAIABigMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQIEBQMGB//EADUQAQABAgMFBwEHBAMAAAAAAAABAhEDITEEBSJBURITFDJTYaGBI0Jxc4Ky4VJykfBDwdH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGxEBAQEBAAMBAAAAAAAAAAAAAAERMRIhUQL/2gAMAwEAAhEDEQA/AP1YB1cxFQBQARUBUJAAUEUAIlFQFQAUEkFQAFRQSRSAAACAARUBQAEVAVFAEUAAARUBQAQAAIAUAAQBQABAFEUARQAgARSAIRQAAARQC7Ga4jKZzIxKesZ6AyRjGJHWM9CMSMs4z0BkMYrjrGemerIFEsAogCgACAKAAIAoAAgCgACAKioCgAAAAAAASgoAESAioCgAXAASZ66K094bR3dM1RHFfsUX8ul5qsDZ7ynrGl/oxxMaIiZmezTFpmqdLdI93BnbMX1K/pNnniY1dXnqqqtp2pmbK8U+Tax941zNsP7OjlEeafeZeXjsb1KvhrjcZrY8djepV8Hjsb1KvhrhjNbeFvHFic6u3HOmq2f1dfZsemqntU3mnnGtVE9J9nzrLDxKqZvTVNM9aZsWNlfSziU9Y92US+c8Zi+pX/l0t3bXNcVdrzUWqmqI89PumxUrpAMaAAAAAAAAAAAAAAAAISAoAAICgAAgAKAigIoAQioCooA5e+Y4afzJ+vC6jl758tP5k/tbOsvHJAWhYpmZiIi8zlERzl1tl3XTGeJxVf0x5Y/9eW5sG81Vz93hp/GdZ/3qu9drmJ7uibREccxrN+Sb8VPrd7GDGVsOPbhu8to3bRV5eCrlMeWfo4dm7u7a5oqimZvRVNrT92Z0mDDY1sbCmiZpqi0x/t2Ds74wb0RXzom0/wBsuM2XWWYN/dE8WJy+z16cUNBvbonixOX2ev6oLwjuSCIWoAAICgAAgKAACAqKAIqQAKWAC6AohcFBAULoCygAKigBAACAsIqArl75jhj8yf2uo5e+Y4afzJ/a2dZeOSAtDr7lngqjnFV/ho7ypmMWu/Oe1H4TBu/ae7rz8tWVXt0l1tr2SnFiJvaqI4aozy/7hPKrscBlh0zM0xGszER/ltzuvFv92fe7e2HYIw57VU9qvlbSn8C2MxnvObYVfvaPreHBdDeu1RVMUUzemmbzMaTV/Dnn54Ub26fNicuDX9UNFvbpnixOXBr+qG0juSEpdC1EuAohcFC6Aoly4KCXBRLlwUEuCoqAKICgAAAAAAAShICglgBQACAEUAcvfPlpy/5J158LqNPbtm7ymadJvFdMzpM2tMEZXBGzOwY3pz9LSngMb06vheoxrtjZtsrw8qZvT/TVnH8L4HG9Or4PA43p1fB6b7bUb3n04v8A3fw19o3hiVxbyUzrFPP6sPAY3p1fB4DG9Or4ZkPbXGx4DG9Or4XwGN6dXw3WY1m9uieLE5cGv6oeXgMb06vh0N37HOHftZV15WjPs0xN5uWtkdEBCwAAAAAAIAAAAAAAQCAWEVLAAoIKAiooIKgAACpZQEUABAUABJi+uce8XVAScOnpGeuSd3TnlGeejMBh3dPSM9Tu6ekZs4AYThx0jPUnDpzyjNmAwnDjpGep3dPSM9WaAxnDjpGerKKYjKIiPwABQBFRQRRAFAEBQAQBUUBFQAAFS4AoAAAAAAACLKAKAEAAAAAAIoCKAAgAtkAVFQBYCIAAAAAAAAAAAAAAAABAAVAB/9k='
        users.push(user)
        return 'success'
      }
    } catch (error) {
      return 'failed'
    }
  }
  public login(user: IUser): string {
    try {
      if (users.find((u) => u.email === user.email && u.password === user.password))
        return 'success'
      else if (!users.find((u) => u.email))
        return 'not exists'
      else
        return 'invalid'

    } catch (error) {
      return 'failed'
    }
  }

  // login a user
  public loginUser(user: IUser): Observable<{ result: string, user: IUser }> {
    let dataURL: string = `http://127.0.0.1:3000/user/login`;
    return this.httpClient.post<{ result: string, user: IUser }>(dataURL, user).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }

  // is LoggedIn
  public isLoggedIn(): boolean {
    let user = localStorage.getItem('user');
    return !!user;
  }
  // is LoggedIn
  public isLogIn(): IUser {
    let user = this.getUser(this.getUserData().email);
    return user;
  }

  // logOut
  public logOut() {
    localStorage.removeItem('user');
  }

  // getUserData
  public getUserData() {
    return JSON.parse(localStorage.getItem('user')!);
  }
  public getUser(email: string): IUser | any {
    return users.find((user) => user.email === email)
  }

  // get followers data
  public getFollowers(emails: string[]): IFollowers[] | any {
    let ans: IFollowers | any = []
    for (let e of emails) {
      ans.push(followers.find((follower) => follower.email === e))
    }
    return ans;
  }
  // get following data
  public getFollowings(emails: string[]): IFollowers[] | any {
    let ans: IFollowing | any = []
    for (let e of emails) {
      ans.push(following.find((following) => following.email === e))
    }
    return ans;
  }

  // add a follower
  public addFollowing(email: string) {
    let userEmail = this.getUserData()
    let user: IUser = this.getUser(userEmail.email)
    console.log('From service', user)
    user.following!.push(email)
  }

  // get posts data
  public getPosts(followings: IFollowing[]): IPost[] | any {
    let ans: IPost[] | any = []
    for (let following of followings) {
      ans.push(following.posts)
    }
    return ans.sort(
      (objA: any, objB: any) => Number(objA.uploadDate) - Number(objB.uploadDate),
    );;
  }

  public editProfile(data: any) {
    let user = this.getUser(this.getUserData().email)
    // personal
    user.name = data.personal.name
    user.avatar = data.personal.avatar
    user.coverPhoto = data.personal.coverPhoto
    user.contact.email = data.personal.email
    user.contact.primaryPhone = data.personal.primaryPhone
    user.contact.secondaryPhone = data.personal.secondaryPhone
    user.basic.nickName = data.personal.nickname
    user.basic.gender = data.personal.gender
    user.basic.languages = data.personal.languages
    user.basic.dob = data.personal.dob
    user.basic.aboutYou = data.personal.aboutYou
    user.basic.favouriteQuote = data.personal.favouriteQuote
    user.social.insta = data.personal.instagram
    user.social.twitter = data.personal.twitter
    user.social.website = data.personal.website
    // Address
    user.address.homeCity = data.address.homeCity
    user.address.homeState = data.address.homeState
    user.address.currentCity = data.address.currentCity
    user.address.currentState = data.address.currentState
    user.address.country = data.address.country
    // work-education
    user.work.designation = data.education.designation
    user.work.organization = data.education.organization
    user.education.college = data.education.college
    user.education.highSchool = data.education.highSchool
    user.education.school = data.education.school

  }

  // createPost
  public createPost(post: any) {
    let user = this.getUser(this.getUserData().email)
    console.log('Create Post', post)
    user.posts.push(post)
  }
}
