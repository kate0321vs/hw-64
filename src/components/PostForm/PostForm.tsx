import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IPostForm } from '../../types';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from '../UI/Loader/Loader.tsx';

interface Props {
  isEdit?: boolean;
  onSubmitAction: (post: IPostForm) => void;
  id?: string;
}

const initialState = {
  title: '',
  description: '',
  date: '',
}

const PostForm: React.FC<Props> = ({isEdit = false, onSubmitAction, id}) => {
  const [form, setForm] = useState<IPostForm>(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchApiPosts = useCallback(async () => {
    if (!isEdit) {
      return
    }
    try {
      setLoading(true);
      const response = await axiosApi<IPostForm>(`posts/${id}.json`);

      if (!response.data) {
        toast.error('Game not found');
        navigate('/');
        return
      }
      setForm(response.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [isEdit, id]);

  useEffect(() => {
    void fetchApiPosts()
  }, [fetchApiPosts])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitAction({...form, date: new Date().toISOString()});
  }

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  return (
    loading ? <Loader/> :
    <form onSubmit={onSubmit}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center'}}>{isEdit ? 'Edit ' : 'Add new '}
        post</Typography>

      <Grid container spacing={2} sx={{mx: 'auto', width: '50%', mt: 4}}>
        <Grid size={12}>
          <TextField sx={{width: '100%'}}
                     label="Title"
                     name="title"
                     variant="outlined"
                     value={form.title}
                     onChange={onInputChange}
                     required/>
        </Grid>
        <Grid size={12}>
          <TextField sx={{width: '100%'}}
                     label="Description"
                     name="description"
                     variant="outlined"
                     multiline
                     rows={3}
                     value={form.description}
                     onChange={onInputChange}
                     required/>

        </Grid>
        <Grid size={12}>
          <Button sx={{width: '100%'}} type="submit" variant="contained">{isEdit ? 'Edit' : 'Add'}</Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;