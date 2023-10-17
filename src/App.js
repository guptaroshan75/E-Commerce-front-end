import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Product from './Pages/Product';
import PriceList from './Pages/PriceList';
import Gallery from './Pages/Gallery';
import Blog from './Pages/Blog';
import Enquiry from './Pages/Enquiry';
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import SingleCategoryPage from './Pages/SingleCategoryPage';
import '../src/css/style.css'
import AboutUs from './Pages/AboutUs';
import Cart from './Components/Cart';
import SingleProductPage from './Pages/SingleProductPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SelectCategoryPriceList from './Pages/SelectCategoryPriceList';
import CheckOut from './Components/CheckOut';
import SingleBlogPage from './Pages/SingleBlogPage';
import SearchProduct from './Components/SearchProduct';

const App = () => {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-page' element={<AboutUs />} />
        <Route path='/product-category' element={<Product />} />
        <Route path='/price-list' element={<PriceList />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/enquiry' element={<Enquiry />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/product-category/:name' element={<SingleCategoryPage />} />
        <Route path='/price-list/:name' element={<SelectCategoryPriceList />} />
        <Route path='/single-product/:name' element={<SingleProductPage />} />
        <Route path='/cart-page' element={<Cart />} />
        <Route path='/checkout-page' element={<CheckOut />} />
        <Route path='/specific-blog/:name' element={<SingleBlogPage />} />
        <Route path='/search-product' element={<SearchProduct />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
