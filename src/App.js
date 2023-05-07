import React from "react";
// import { getAuth } from "firebase/auth";
// Containers
import Main from './containers/Main';
// Components
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// Context
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Main />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
