import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container} from 'react-bootstrap'

import CartPage from './pages/CartPage'
import HomePages from './pages/HomePages'
import Header from './components/header';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path='/' element={<HomePages/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
