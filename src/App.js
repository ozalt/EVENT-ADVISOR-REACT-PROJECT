import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Blog, VendorsPages, VendorDetail, SignUp,Login } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<VendorsPages />} />
        <Route path="/vendor-detail" element={<VendorDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </BrowserRouter>
      );
}

      export default App;
