import Home from './pages/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CategoryPage from './pages/ProductCategory/CategoryPage'
import { CartProvider } from './CartContext'
import Cart from './components/Cart/Cart'
import CheckOut from './pages/CheckOut/CheckOut'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/men" element={<CategoryPage category="Men" />} />
          <Route path="/category/women" element={<CategoryPage category="Women" />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path="*" element={
            <div>
              <h1>404 NOT FOUND</h1>
            </div>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
