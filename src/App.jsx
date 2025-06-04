import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";


import './index.css'


export default function App() {
    return (
      <main className="bg-white h-full">
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
      </main>
    );
  }
  
