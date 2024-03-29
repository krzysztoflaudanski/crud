import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/views/About/About';
import NotFound from './components/views/NotFound/NotFound';
import { Container } from 'react-bootstrap'
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer'
import AllCategories from './components/pages/AllCategories/AllCategories';
import Category from './components/features/Category/Category';


function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/categories" element={<AllCategories/>} />
        <Route path="/categories/:categoryName" element={<Category/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;