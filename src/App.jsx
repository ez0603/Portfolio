import "./App.css";
import HomeRoute from "./Routes/HomeRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Router } from "react-router-dom";

function App() {
  return (
    <Router basename="/Portfolio">
      <Header />
      <HomeRoute />
      <Footer />
    </Router>
  );
}

export default App;
