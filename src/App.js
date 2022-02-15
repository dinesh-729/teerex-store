import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { ProductsContext } from './shared/context/products-context'
import { useProducts } from './shared/hooks/products-hook'
import Home from './pages/home'
import Cart from './pages/cart'
import './App.css'



function App() {
  const { products, addCartItem, removeCartItem } = useProducts()

  return (
    <ProductsContext.Provider
     value={{
      products,
      addCartItem,
      removeCartItem
     }}
    >
      <Router>
        <main>
          <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/cart' element={<Cart />} exact />
            <Route path="*" element={
                <p>404: Page Not Found</p>
              }
            />
          </Routes>
        </main>
      </Router>
    </ProductsContext.Provider>
  )
}

export default App;
