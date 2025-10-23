import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css';

/**
 * Main App Component
 * 
 * Root component that renders the main application layout including:
 * - Navigation bar
 * - Dashboard with student information
 * 
 * @component
 * @returns {JSX.Element} The rendered App component
 */
function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
