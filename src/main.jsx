import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import TRS from './pages/TRS-page.jsx'

import { BrowserRouter, Routes, Route } from "react-router";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
	  <Route path="/portfolio" element={<Portfolio />} />
	  <Route path="/resume" element={<Resume />} />
	  <Route path="/contact" element={<Contact />} />
	  <Route path="/TRS" element = {<TRS />} />
    </Routes>
  </BrowserRouter>,
);
