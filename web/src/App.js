import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, BlogPage, VendorsPages, VendorDetail, SignUp, Login, SingleBlog } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<VendorsPages />} />
        <Route path="/vendor-detail" element={<VendorDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/single-blog" element={<SingleBlog />} />
      </Routes>
      </BrowserRouter>
      );
}

      export default App;
