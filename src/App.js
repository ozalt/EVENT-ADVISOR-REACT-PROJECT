import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, VendorsPages } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route path="/hotel-detail" element={<HotelDetail />} /> */}
        <Route path="/vendors" element={<VendorsPages />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </BrowserRouter>
      );
}

      export default App;
