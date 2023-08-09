import { Container } from 'react-bootstrap';
import AddPostForm from '../../features/AddPostForm/AddPostForm';
import styles from './AddPost.module.scss'

const AddPost = () => {
    return (<section id="addPost">
        <Container className='mx-auto' style={{ minWidth: '300px', maxWidth: '800px' }}>
            <h1>AddPost</h1>
            <AddPostForm />
        </Container>
    </section>
    )
}

export default AddPost;