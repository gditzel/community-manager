import "./index.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import Productions from "./pages/productions/Productions";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Production/:idProduction" element={<Productions />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
