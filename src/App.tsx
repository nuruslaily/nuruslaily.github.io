import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Detail project tetap boleh pakai route */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
