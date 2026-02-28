// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";

// We'll move most layout into a Layout wrapper so both Home and About can share the header + background
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white">
      {/* Header - blue, sticky/fixed */}
      <header className="bg-blue-900/90 backdrop-blur-sm border-b border-blue-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl sm:text-3xl font-bold tracking-tight">
            WeatherNow
          </Link>

          <Link
            to="/about"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg font-medium transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </header>

      {/* Main content area - centered children */}
      <main className="flex flex-col items-center justify-start pt-10 pb-16 px-4 sm:px-6">
        {children}
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;