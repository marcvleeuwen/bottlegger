import {PostComment} from "./post-comment.model";

export interface PostData {
  postId: string;
  userData: {
    ID: string;
    username: string;
    profilePicture: string;
  }
  description: string;
  image: string;
  comments: Array<PostComment>;
  postUrl: string;
  timestamp: string;
  location?: string;
}
