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
            <Route exact path="/corporate" element={<AppHero />} />
            <Route path="/corporate/about" element={<AppAbout />} />
            <Route path="/corporate/services" element={<AppServices />} />
            <Route path="/corporate/works" element={<AppWorks />} />
            <Route path="/corporate/teams" element={<AppTeams />} />
            <Route
              path="/corporate/testimonials"
              element={<AppTestimonials />}
            />
            <Route path="/corporate/pricing" element={<AppPricing />} />
            <Route path="/corporate/blog" element={<AppBlog />} />
            <Route path="/corporate/contact" element={<AppContact />} />
            <Route path="*" element={<h1>Page not found</h1>} />
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
