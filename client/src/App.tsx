import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CollegePage from "./pages/CollegePage";
import LocationPage from "./pages/LocationPage";
import PageLayout from "./layouts/PageLayout";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route element={<PageLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/college" element={<CollegePage />} />
          <Route path="/location" element={<LocationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
