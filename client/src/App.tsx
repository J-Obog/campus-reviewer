import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import CollegePage from "./pages/CollegePage";
import LocationPage from "./pages/LocationPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/college" element={<CollegePage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
