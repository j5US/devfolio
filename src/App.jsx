// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DemoGrid from "./DemoGrid"
// import NavBar from "./components/NavBar"
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from './pages/HomePage';
import Project1Page from './pages/Project1Page';
import Project2Page from './pages/Project2Page';
import Project3Page from './pages/Project3Page';

function App() {


  return (
    <div className="size-full flex flex-col items-center">
      <Router>
        <ScrollToTop/>
        <Routes>
          {/* Define routes using the "element" prop and JSX */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/wild-oasis" element={<Project1Page />} />
          <Route path="/examfusion" element={<Project2Page />} />
          <Route path="/natours" element={<Project3Page />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
