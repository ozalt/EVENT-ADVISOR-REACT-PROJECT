import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, BlogPage, VendorsPages, VendorDetail, SignupHandler, Login, SingleBlog } 
from './pages';
import { useAuthContext } from "./hooks/useAuthContext";
import AdminDashboard from './Dashboard/AdminDash'
const App = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vendors" element={<VendorsPages />} />
        <Route path="/vendor-detail/:id" element={<VendorDetail />} />
        <Route path="/signup" element={<SignupHandler />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/single-blog" element={<SingleBlog />} />
        {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
        <Route
          path="/dashboard"
          element={user ? <AdminDashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

      export default App;
