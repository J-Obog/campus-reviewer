import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/college" element={<></>} />
        <Route path="/location" element={<></>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
