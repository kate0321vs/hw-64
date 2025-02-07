import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home/Home.tsx';
import Add from './containers/Add/Add.tsx';
import AboutUs from './containers/AboutUs/AboutUs.tsx';
import Contacts from './containers/Contacts/Contacts.tsx';
import PostFullInfo from './components/PostFullInfo/PostFullInfo.tsx';
import EditPost from './components/EditPost/EditPost.tsx';

const App = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/"
                 element={<Home/>}/>
          <Route path="/posts"
                 element={<Home/>}/>
          <Route path="/posts/:id"
                 element={<PostFullInfo/>}/>
          <Route path="/posts/:id/edit"
                 element={<EditPost/>}/>
          <Route path="/posts/new-post"
                 element={<Add/>}/>
          <Route path="/posts/about"
                 element={<AboutUs/>}/>
          <Route path="/posts/contacts"
                 element={(<Contacts/>)}/>
          <Route path="*"
                 element={<h1>Not found page</h1>}/>
        </Routes>
      </Container>
    </div>
  );
};

export default App
