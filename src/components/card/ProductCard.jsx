import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

const ProductCard = ({id, image, name, category,  description, price}) => {

  return (
    <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Title>{category}</Card.Title>
      <Card.Text>{price}</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary"></Button>
    </Card.Body>
  </Card>
  )
}

ProductCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
}

export default ProductCard