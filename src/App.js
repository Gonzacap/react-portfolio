import React from "react";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
// Containers
import Main from './containers/Main';
// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
// Context
import { AuthProvider } from './context/authContext';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
