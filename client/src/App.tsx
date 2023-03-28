import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CollegePage from "./pages/CollegePage";
import LocationPage from "./pages/LocationPage";
import PageLayout from "./layouts/PageLayout";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import BookmarksPage from "./pages/BookmarksPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PageLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/college" element={<CollegePage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
