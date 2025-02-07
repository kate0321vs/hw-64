import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IPostForm } from '../../types';
import axiosApi from '../../axiosApi.ts';
import { toast } from 'react-toastify';
import PostForm from '../PostForm/PostForm.tsx';
import Loader from '../UI/Loader/Loader.tsx';

const EditPost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();

  const onSubmitNewGame = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosApi.put(`posts/${id}.json`, post);
      toast.success('Game was edited Successfully!');
      navigate('/');
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }

  let form = (<PostForm onSubmitAction={onSubmitNewGame} isEdit id={id} />)
  if (loading) form = <Loader/>

  return (
    <>
      {form}
    </>
  );
};

export default EditPost;