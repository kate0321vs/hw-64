import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { IPost } from '../../types';
import dayjs from 'dayjs';

interface Props {
  post: IPost;
}

const PostItem: React.FC<Props> = ({post}) => {
  return (
    <Card variant="outlined" sx={{minWidth: 275}}>
      <CardContent>
        <Typography variant="body2" sx={{color: 'text.secondary', fontSize: 15}}>
          Created on {dayjs(post.date).format('DD.MM.YYYY HH:mm')}
        </Typography>
        <hr/>
        <Typography gutterBottom sx={{fontSize: 19}}>
          {post.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read more</Button>
      </CardActions>
    </Card>
  );
};

export default PostItem;