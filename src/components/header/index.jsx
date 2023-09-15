import { NavLink } from 'react-router-dom'
import { Nav,Form } from 'react-bootstrap'
import { useContext } from 'react'
import { LanguageContext } from '../../context/LanguageContext';
import { ProductContext } from '../../context/ProductContextProvider';


const Header = () => {
  const { langType, lang, setLangType } = useContext(LanguageContext);

  const {cart} = useContext(ProductContext);

  const changeLanguage = (e) => {
    setLangType(e.target.value);
    localStorage.setItem('language',e.target.value);
  }

  return (
    <Nav className='d-flex bg-light py-2 fixed-top justify-content-center mb-4 align-items-center'>
    <NavLink className='nav-link fs-5 me-3' to="/">{lang.Главная}</NavLink>
    <NavLink className='nav-link fs-5 me-3' to='/cart'>{lang.Корзина}({cart.length})</NavLink>
    <div>
    <Form.Select value={langType} onChange={changeLanguage}>
        <option value="ru">Ru</option>
        <option value="uz">Uz</option>
    </Form.Select>
    </div>
  </Nav>
  )
}

export default Header