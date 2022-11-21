import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/portfolio' element={<Portfolio />} />
        <Route exact path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
