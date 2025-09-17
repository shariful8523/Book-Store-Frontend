import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CartPage from './Pages/CartPage';
import AboutPage from './Pages/AboutPage';
import BookPage from './Pages/BookPage';
import ContactPage from './Pages/ContactPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}  />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/books' element={<BookPage/>} />
      <Route path='/contact' element={<ContactPage/>} />

      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
    </Routes>
  );
};

export default App;