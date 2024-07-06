import React from 'react';
import { useLocation } from 'react-router-dom';
import HomeRoute from "./Routes/HomeRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  return (
    <>
      {!isHomeRoute && <Header />}
      <HomeRoute />
      <Footer />
    </>
  );
}

export default App;
