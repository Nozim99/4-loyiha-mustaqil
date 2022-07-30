import "./App.css";
import Header from "./layout/Header";
import Home from "./layout/Home";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Meal from "./components/Meal";
import Error from "./components/Error";
import Recipe from "./components/Recipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="meals/:name" element={<Meal />} />
          <Route path="meals/:name/:id" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
