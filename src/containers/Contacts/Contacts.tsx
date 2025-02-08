import { Button, Container, TextField, Typography } from '@mui/material';

const Contacts = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography textAlign='center' variant="h4">Contact us</Typography>
        <Typography textAlign='center'>
          If you have questions or suggestions, please contact us!
        </Typography>

        <TextField label="Your name" fullWidth margin="normal" />
        <TextField label="Email" type="email" fullWidth margin="normal" />
        <TextField label="Message" multiline rows={4} fullWidth margin="normal" />
        <Button variant="contained" sx={{ mt: 2 }}>Send</Button>

        <Typography  variant="h5" sx={{ mt: 4 }}>Our contacts</Typography>
        <Typography>Email: example@email.com</Typography>
        <Typography>Phone: +7 (900) 123-45-67</Typography>
      </Container>

    </div>
  );
};

export default Contacts;