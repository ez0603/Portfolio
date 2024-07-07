import React from "react";
import { useLocation } from "react-router-dom";
import HomeRoute from "./Routes/HomeRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";

function App() {
  const location = useLocation();
  const isHomeRoute = location.pathname === "/";

  return (
    <>
      <BackgroundLayout>
          <HomeRoute />
      </BackgroundLayout>
    </>
  );
}

export default App;
