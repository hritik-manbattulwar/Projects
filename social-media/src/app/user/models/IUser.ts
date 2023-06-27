import { IPost } from "./IPost";


export interface IUser {
  name?: String;
  email: String;
  password: String;
  avatar?: String;
  coverPhoto?: string,
  basic?: {
    gender: String,
    dob: Date;
    languages?: String[],
    aboutYou?: String,
    favouriteQuote?: String,
    nickName?: String
  }
  address?: {
    homeCity: string,
    homeState: String,
    currentCity: string,
    currentState: String,
    country: String,
  },
  contact?: {
    email?: string,
    primaryPhone: string,
    secondaryPhone?: string
  }
  education?: {
    college?: string,
    highSchool: string,
    school: string
  }
  work?: {
    designation: string,
    organization: string,
  },
  social?: {
    insta?: string,
    website?: string
    twitter?: string
  }
  followers?: string[],
  following?: string[],
  posts?: IPost[],

}

