import { IPost, IPostsApi } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import Loader from '../../components/UI/Loader/Loader.tsx';
import Grid from '@mui/material/Grid2';
import PostItem from '../../components/PostItem/PostItem.tsx';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IPostsApi>('posts.json');
      if (response.data) {
        const postsObject = response.data;
        const postsObjectKeys = Object.keys(postsObject);
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
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [])

  useEffect(() => {
    void fetchPosts();
  }, [fetchPosts]);

  let allPosts = null;

  if (loading) {
    allPosts = <Loader/>;
  } else {
    if (posts.length > 0) {
      allPosts = (
        <>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid key={post.id}>
                <PostItem post={post}/>
              </Grid>
            ))}
          </Grid>
        </>
      );
    } else {
      allPosts = (<p>No posts yet</p>)
    }
  }

  return (
    <>
      {allPosts}
    </>
  );
};

export default Home;