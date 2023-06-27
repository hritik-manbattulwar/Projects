import { IPost } from "./IPost";

export interface IFollowing {
    name: string,
    email: string,
    avatar?: string,
    cover_photo?: string,
    basic?: {
        gender: String,
        dob: Date;
        languages?: String[],
        aboutYou?: String,
        favouriteQuote?: String,
        nickName?: String
    },
    address?: {
        hometown: string,
        currentTown: string,
        currentState: String,
        homeState: String
        country: String,
    },
    education?: {
        college?: string,
        highSchool: string,
        school: string
    },
    work?: {
        role: string,
        organization: string,
        city: string,
        state: string
    },
    followers?: string[],
    following?: string[],
    posts?: IPost[],
}