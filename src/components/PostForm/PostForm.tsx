import { Button, TextField, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { IPostForm } from '../../types';
import { FormEvent, useState } from 'react';

interface Props {
  isEdit?: boolean;
  onSubmitAction: (post: IPostForm) => void
}

const initialState = {
  title: '',
  description: '',
  date: '',
}

const PostForm: React.FC<Props> = ({isEdit = false, onSubmitAction}) => {
  const [form, setForm] = useState<IPostForm>(initialState);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmitAction({...form, date: new Date().toISOString()});
  }

  const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  return (
    <form onSubmit={onSubmit}>
      <Typography variant="h4" sx={{flexGrow: 1, textAlign: 'center'}}>{isEdit ? 'Edit' : 'Add new '}
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