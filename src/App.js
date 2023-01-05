import { BrowserRouter, Routes, Route } from "react-router-dom";
import RouteScrollToTop from "./MasterLayout/RouteScrollToTop";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import SingleBlog from "./Pages/SingleBlog";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/single-blog" element={<SingleBlog />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
