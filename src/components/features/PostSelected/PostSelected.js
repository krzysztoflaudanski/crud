import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getPostById, removePost } from '../../../redux/postsRedux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { NavLink, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dateToStr } from '../../../utils/dateToStr';


const PostSelected = () => {

    const { postId } = useParams();
    const postData = useSelector(state => getPostById(state, postId))

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const handleRemove = e => {
        e.preventDefault()
        dispatch(removePost(postId))
    }

    if (!postData) return <Navigate to="/" />
    else return (<article><Card className="mx-auto" style={{ minWidth: '300px', maxWidth: '800px' }} border="light">
        <Card.Body>
            <Stack direction="horizontal" gap={2} className='mb-4'>
                <Card.Title className='mb-0' ><h2>{postData.title}</h2></Card.Title>
                <NavLink to={"/post/edit/" + postId} className='ms-auto'>
                    <Button variant="outline-info" >Edit</Button>
                </NavLink>
                <Button variant="outline-danger" onClick={handleShow}>Delete</Button>
            </Stack>
            <Stack direction="horizontal" gap={1}>
                <Card.Subtitle className='my-auto'>Author:
                </Card.Subtitle>
                <Card.Text className='my-auto'>
                    {postData.author}
                </Card.Text>
            </Stack>
            <Stack direction="horizontal" gap={1}>
                <Card.Subtitle className='my-auto'>Published:
                </Card.Subtitle>
                <Card.Text className='my-auto' >
                    {dateToStr(postData.publishedDate)}
                </Card.Text>
            </Stack>
            <Stack direction="horizontal" gap={1}>
                <Card.Subtitle className='my-auto'>Category:
                </Card.Subtitle>
                <Card.Text className='my-auto'>
                    {postData.category}
                </Card.Text>
            </Stack>
            <Card.Text>
                {postData.shortDescription}
            </Card.Text>
            <Card.Text dangerouslySetInnerHTML={{ __html: postData.content }}>
            </Card.Text>
        </Card.Body>
    </Card>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>This operation will completely remove this post from app.<p> Are you sure, you want to do that</p></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleRemove}>
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
    </article>
    )
}

export default PostSelected;