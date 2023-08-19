import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getAllCategories } from '../../../redux/categoriesReducer';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Categories = () => {

 const allCategories = useSelector(getAllCategories)

    return (
        <Card className='mt-4'>
          <ListGroup variant="flush">
            {allCategories.map(category => 
                <ListGroup.Item><NavLink to={"/categories/" + category}>{category}</NavLink></ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      );
}

export default Categories