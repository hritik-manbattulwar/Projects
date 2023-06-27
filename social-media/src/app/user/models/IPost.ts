export interface IPost {
    image: string,
    caption: String,
    likeCount: Number,
    commentCount: Number,
    shareCount: Number,
    uploadDate: Date,
    category: String,
    comments?: IComment[],
}

export interface IComment {
    email: String,
    comment: String,
}