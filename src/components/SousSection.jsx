import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';

const SousSection = ({id, image, name, category,  description, price}) => {
  const {lang} = useContext(LanguageContext);
  return (
    <Card className='category-pizza mb-4'>
    <LazyLoadImage className='pizza-img card-img-top' effect='blur' src={image} />
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{price} ₽</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Button variant="primary">{lang.Выбрать}</Button>
    </Card.Body>
  </Card>
  )
}

SousSection.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
}
export default SousSection