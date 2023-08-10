import { Container } from 'react-bootstrap';
import EditPostForm from '../../features/EditPostFrom/EditPostForm';

const EditPost = () => {
    return (<section id="addPost">
        <Container className='mx-auto' style={{ minWidth: '300px', maxWidth: '800px' }}>
            <h1>Edit post</h1>
            <EditPostForm />
        </Container>
    </section>
    )
}

export default EditPost;