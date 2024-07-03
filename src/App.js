import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import Error from './Components/ErrorPage/ErrorPage';
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import SingleProduct from './Components/Singleproduct/SingleProduct';
import { Footer } from './Components/Footer/Footer';
import Products from './Components/Products/Products';
import Categories from './Components/Categories/Categories';
import axios from 'axios';
import ContextProvider from './ContextStore/ContextProvider';
import CheckOutPage from './Components/CheckOut/CheckOutPage';
import CheckOutSuccess from './Components/SuccessFullCheckOut/CheckOutSuccess';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  };
  return (
    <ContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/categories" element={<Categories products={products}/>} />
          <Route path="/singleproduct" element={<SingleProduct/>} />
          <Route path="/checkoutpage" element={<CheckOutPage/>}/>
          <Route path="/orderplaced" element={<CheckOutSuccess/>}/>
          <Route path="*" element={<Error error="Error: 404" title="Page Not Found" desc="The page you try to visit is not found or not build by the developer at the time."/>} />
        </Routes>
        <Footer/>
      </Router>
    </ContextProvider>
  );
}

export default App;
