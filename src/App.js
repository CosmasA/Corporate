import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";
import AppAbout from "./components/about";
import AppHero from "./components/hero";
import AppServices from "./components/services";
import AppWorks from "./components/works";
import AppTeams from "./components/teams";
import AppTestimonials from "./components/testimonials";
import AppPricing from "./components/pricing";
import AppBlog from "./components/blog";
import AppContact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <header id="header">
          <AppHeader />
        </header>

        <main>
          <Routes>
            <Route path="/" element={<AppHero />} />
            <Route path="/about" element={<AppAbout />} />
            <Route path="/services" element={<AppServices />} />
            <Route path="/works" element={<AppWorks />} />
            <Route path="/teams" element={<AppTeams />} />
            <Route path="/testimonials" element={<AppTestimonials />} />
            <Route path="/pricing" element={<AppPricing />} />
            <Route path="/blog" element={<AppBlog />} />
            <Route path="/contact" element={<AppContact />} />
          </Routes>
        </main>

        <footer id="footer">
          <AppFooter />
        </footer>
      </div>
    </Router>
  );
}

export default App;
