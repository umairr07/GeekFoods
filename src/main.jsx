import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Header from "./components/HomePage/Header.jsx";
import MainBody from "./components/HomePage/MainBody.jsx";
import MidBody from "./components/HomePage/MidBody.jsx";
import Cards from "./components/HomePage/Cards.jsx";
import Footer from "./components/HomePage/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <MidBody />
    <Cards />
    <Footer />
  </React.StrictMode>
);
