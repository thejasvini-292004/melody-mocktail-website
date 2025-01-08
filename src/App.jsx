import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import AboutUs from "./pages/AboutUss";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
