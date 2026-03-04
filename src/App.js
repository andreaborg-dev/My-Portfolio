import "./App.css"; import "./components/Styles/header.css"; import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"; import HomePage from "./components/Pages/HomePage"; import ProjectPage from "./components/Pages/Project"; import SkillsPage from "./components/Pages/Skills"; import ContactPage from "./components/Pages/Contact"; import Logo from "./components/images/Logo.png"; import Footer from "./components/Footer";
function App() { return ( <div className="App"> <Router> <div className="Header-Container"> <div className="Header-Grid"> <Link to="/" className="Header"> <img src={Logo} alt="Logo" className="Header-Logo" id="Logo" /> </Link> </div> </div>
<div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
    </div>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>

  <Footer />
</div>

); }
export default App;
