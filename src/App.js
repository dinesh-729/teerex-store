import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './pages/home'
import Cart from './pages/cart'
import './App.css'

function App() {
  return (
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
  );
}

export default App;
