// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DemoGrid from "./DemoGrid"
// import NavBar from "./components/NavBar"
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from './pages/HomePage';

function App() {


  return (
    <div className="size-full flex flex-col items-center">
      <Router>
        <ScrollToTop/>
        <Routes>
          {/* Define routes using the "element" prop and JSX */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
