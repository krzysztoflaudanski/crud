import { Button, Form } from "react-bootstrap";

const AddPostForm = () => {
    return (
        <Form className="">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:'300px'}}>
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:'300px'}}>
                <Form.Label>Author</Form.Label>
                <Form.Control type="text" placeholder="Enter author"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" style={{width:'300px'}}>
                <Form.Label>Published</Form.Label>
                <Form.Control type="text" placeholder="Enter author"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{minWidth:'300px'}}>
                <Form.Label>Short description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Leave a comment here"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" style={{minWidth:'300px'}}>
                <Form.Label>Main content</Form.Label>
                <Form.Control as="textarea" rows={10} placeholder="Leave a comment here"/>
            </Form.Group>
            <Button type="submit">Add Post</Button>
        </Form>
    )
}

export default AddPostForm;