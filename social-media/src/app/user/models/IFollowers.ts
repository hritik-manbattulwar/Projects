export interface IFollowers {
    name: string,
    email: string,
    isFollowing: boolean
    avatar?: string,
    cover_photo?: string,
    role?: string,
    organization?: string,
    nickName?: string,
    address?: {
        city: String,
        state: String,
        country: String,
    },
}