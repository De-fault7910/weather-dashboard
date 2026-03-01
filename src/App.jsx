// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-600 via-blue-400/30 to-white/20 text-white">
      <main className="flex-1 flex flex-col items-center justify-start pt-10 pb-16 px-4 sm:px-6 w-full">
        {children}
      </main>
    </div>
  );
}

// Use Vite environment variable
const basename = import.meta.env.VITE_BASENAME || "/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;