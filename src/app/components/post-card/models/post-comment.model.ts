export interface PostComment {
  username: string;
  profilePicture: string;
  replies: Array<PostComment>;
  timestamp: string;
}
