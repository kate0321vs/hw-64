export interface IPostForm {
  title: string;
  description: string;
  date: string;
}

export interface IPost extends IPostForm {
  id: string;
}

export interface IPostsApi {
  [id: string]: IPostForm;
}