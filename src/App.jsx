import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './pages/CommonPage/Header'
import Footercomponent from './pages/CommonPage/Footercomponent'

import Home from './pages/Home/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import MyAccount from './pages/MyAccount/MyAccount'
import Cart from './pages/Cart/Cart'
import CheckOut from './pages/Cart/CheckOut'
import OrderComplete from './pages/OrderComplete/OrderComplete'
import Auth from './pages/SignIn/Auth'


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
          <Route path="/" element={<Auth />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footercomponent />
      </BrowserRouter>
    </>
  )
}

export default App
