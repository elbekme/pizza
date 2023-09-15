// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const CategoryCard = ({name,image}) => {
  return (
    <Card className='category-card mt-5'>
    <Card.Img className='category-img' variant="top" src={image} />
    <Card.Body>
      <Card.Title >{name}</Card.Title>
      {/* <Button variant="primary">Add to order</Button> */}
    </Card.Body>
  </Card>
  )
}

CategoryCard.propTypes = {
  name:PropTypes.string,
  image:PropTypes.string,
}
export default CategoryCard