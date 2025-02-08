import { List, ListItem, Typography } from '@mui/material';


const AboutUs = () => {

  return (
    <>
      <Typography paddingBottom={2} variant="h4">About us</Typography>
      <Typography paddingBottom={5}>
        Officia commodo laborum et elit exercitation irure in. Sit veniam reprehenderit magna
        reprehenderit cupidatat commodo proident. Occaecat laboris enim incididunt cillum.Officia
        commodo laborum et elit exercitation irure in. Sit veniam reprehenderit magna reprehenderit
        cupidatat commodo proident. Occaecat laboris enim incididunt cillum.Officia commodo laborum
        et elit exercitation irure in. Sit veniam reprehenderit magna reprehenderit cupidatat commodo
        proident. Occaecat laboris enim incididunt cillum.
      </Typography>
      <Typography variant="h5">Our team</Typography>
      <List>
        <ListItem>Kate – editor-in-chief</ListItem>
        <ListItem>Kate – web developer</ListItem>
        <ListItem>Kate – content manager</ListItem>
      </List>
    </>

  );
};

export default AboutUs;