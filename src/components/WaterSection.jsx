import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { LanguageContext } from '../context/LanguageContext';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import { products } from '../data/products';

const WaterSection = ({id, image, name, category,  description, price}) => {
  const {lang} = useContext(LanguageContext);

  const {setCart,cart} = useContext(ProductContext);

  const addToCart = (id) => {
    let product = products.find(el => el.id === id);
    
    let checkCart = cart.find((el) => el.id === id);
    let newCart;
     if (checkCart) {
      newCart = cart.map((el) =>{
        if(el.id === id){
          el.quantity++;
        }
        return el;
      });
      setCart(newCart);
    } else{
      newCart = [...cart, {...product,quantity:1} ];
      setCart(newCart);
    }
    
    localStorage.setItem("cart",JSON.stringify(newCart));
  }
  let check = cart.find(el => el.id === id);
  return (
    <Card className='category-pizza mb-4'>
    <LazyLoadImage className='pizza-img card-img-top' effect='blur' src={image} />
    <Card.Body>
      <Card.Title>{category}</Card.Title>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{price} ₽</Card.Text>
      <Card.Text>{description}</Card.Text>
      <Button variant={check ? "success" : "primary"} onClick={() => addToCart(id)}>{lang.Выбрать}</Button>
    </Card.Body>
  </Card>
  )
}

WaterSection.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
}

export default WaterSection