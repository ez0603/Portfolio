import React from "react";
import HomeRoute from "./Routes/HomeRoute";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";
import Introduce from "./pages/Introduce/Introduce";

function App() {
  return (
    <>
      <BackgroundLayout>
        <Introduce />
        <HomeRoute />
      </BackgroundLayout>
    </>
  );
}

export default App;
