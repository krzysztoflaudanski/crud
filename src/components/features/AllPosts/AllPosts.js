import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

const AllPosts = () => {

  const posts = useSelector(getAllPosts);

  return (<article>
    <Row>{posts.map(post => (
      <Col key={post.title}>
        <Card className="mr-2 mb-3" style={{ minWidth: '18rem' }}>
          <Card.Body  >
            <Card.Title>{post.title}</Card.Title>
            <Stack direction="horizontal" gap={1}>
              <Card.Subtitle>Author:
              </Card.Subtitle>
              <Card.Text>
                {post.author}
              </Card.Text>
            </Stack>
            <Stack direction="horizontal" gap={1}>
              <Card.Subtitle>Published:
              </Card.Subtitle>
              <Card.Text>
                {post.publishedDate}
              </Card.Text>
            </Stack>
            <Card.Text>
              {post.shortDescription}
            </Card.Text><NavLink to={"/post/" + post.id}>
              <Button variant="primary">Read more</Button>
            </NavLink>
          </Card.Body>
        </Card></Col>))}
    </Row>
  </article>
  )
}

export default AllPosts;