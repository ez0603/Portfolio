import React from "react";
import HomeRoute from "./Routes/HomeRoute";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout";

function App() {

  return (
    <>
      <BackgroundLayout>
          <HomeRoute />
      </BackgroundLayout>
    </>
  );
}

export default App;
