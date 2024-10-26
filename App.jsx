import { Provider } from 'react-redux'
import './App.css'
import { store } from './redux/Store'
import MainProducts from './components/MainComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'

function App() {

  return (
    <><Provider store={store}>
<BrowserRouter>
<Navbar/>
      <Routes>
        <Route path="/" element={<MainProducts />}></Route>
        <Route path="/product/:id/:category" element={<Product />} />
        <Route path='/products/:category' element={<MainProducts/>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contacts' element={<Contact></Contact>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
                                                         

                                                         
        

      </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  )
}

export default App
