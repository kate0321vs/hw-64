import PostForm from '../../components/PostForm/PostForm.tsx';
import { IPostForm } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/UI/Loader/Loader.tsx';

const Add = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitNewPost = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosApi.post("posts.json", post);
      toast.success('Post was added Successfully!');
      navigate('/');
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  let form = (<PostForm onSubmitAction={onSubmitNewPost}/>)
  if (loading) form = <Loader/>

  return (
    <>
      {form}
    </>
  );
};

export default Add;