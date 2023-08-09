import { NavLink } from 'react-router-dom';
import AllPosts from '../../features/AllPosts/AllPosts';
import styles from './Home.module.scss';
import { Button, Stack } from 'react-bootstrap';


const Home = () => {
    return (
        <section id="home">
            <Stack direction="horizontal" gap={3} className='mb-3'>
                <h1>All Posts</h1>
                <NavLink to="/post/add" className='ms-auto'>
                    <Button variant="outline-info">Add post</Button>
                </NavLink>
            </Stack>
            <AllPosts />
        </section>
    )
}

export default Home;