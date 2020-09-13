import React from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  const route = window.location.pathname;
  if (route === "/about") return <AboutPage />;
  return <HomePage />;
}

export default App;
