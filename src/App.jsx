import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";

import ScrollToTop from "../src/utils/scrollTop";
import DonateVolunteerPage from "./pages/DonateVolunteerPage";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<ContactPage />}></Route>

          <Route path="/donate" element={<DonateVolunteerPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
