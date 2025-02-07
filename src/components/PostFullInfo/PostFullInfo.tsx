import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { IPost, IPostsApi } from '../../types';
import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import Loader from '../UI/Loader/Loader.tsx';
import { toast } from 'react-toastify';

const PostFullInfo = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);
  const navigate = useNavigate();
  const {id} = useParams();

  const fetchPostInfo = useCallback(async () => {
    if (!id) {
      return
    }
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

  const DeleteGame = async () => {
    try {
      setLoading(true);
      await axiosApi.delete<IPostsApi>(`posts/${id}.json`);
      toast.info('Post was deleted Successfully!');
      navigate('/')
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

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
            <Button color="error" size="small" onClick={DeleteGame}>Delete</Button>
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