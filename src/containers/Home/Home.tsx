import { IPost, IPostsApi } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';


const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const fetchPosts = useCallback( async () => {
    const response = await axiosApi<IPostsApi>('posts.json');
    if (response.data) {
      const postsObject = response.data;
      const postsObjectKeys = Object.keys(postsObject);
      console.log(postsObjectKeys);
      const postsArr = postsObjectKeys.map(key => {
        return {
          id: key,
          ...postsObject[key],
        };
      })
      setPosts(postsArr);
    } else {
      setPosts([]);
    }
  }, [])

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  console.log(posts);

  return (
    <>
      Home
    </>
  );
};

export default Home;