import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Footercomponent from './components/Footercomponent'
import Shop from './components/Shop'
import Product from './components/Product'
import Blog from './components/Blog'
import Contact from './components/Contact'
import MyAccount from './components/MyAccount'
import Cart from './components/Cart'
import CheckOut from './components/CheckOut'
import OrderComplete from './components/OrderComplete'
import SignIn from './components/SignIn'
// import Signup from './components/Signup'

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product" element={<Product />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/myAccount" element={<MyAccount />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/OrderComplete" element={<OrderComplete />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footercomponent />
      </BrowserRouter>
    </>
  )
}

export default App
