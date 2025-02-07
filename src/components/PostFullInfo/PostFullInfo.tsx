import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { NavLink, useParams } from 'react-router-dom';
import { IPost } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import Loader from '../UI/Loader/Loader.tsx';

const PostFullInfo = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();

  const fetchPostInfo = useCallback(async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get(`posts/${id}.json`);
        setPost(response.data);
      } catch (e) {
        alert(e);
      } finally {
        setLoading(false);
      }
    }, [id])

  useEffect(() => {
    void fetchPostInfo()
  }, [fetchPostInfo]);

  let postInfo = null;

  if (loading) {
    postInfo = <Loader/>
  } else {
    if (post !== null) {
      postInfo = (
        <Card variant="outlined" sx={{minWidth: 275}}>
          <CardContent>
            <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 15}}>
              Created on {dayjs(post.date).format('DD.MM.YYYY HH:mm')}
            </Typography>
            <hr/>
            <Typography gutterBottom sx={{fontSize: 19}}>
              {post.title}
            </Typography>
            <Typography gutterBottom sx={{fontSize: 19}}>
              {post.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={NavLink} to={`/posts/${id}/edit`} size="small">Edit</Button>
            <Button size="small">Delete</Button>
          </CardActions>
        </Card>
      );
    } else {
     postInfo = (<p>Post not found</p>)
    }
  }

  return (
    <>
      {postInfo}
    </>
  );
};

export default PostFullInfo;