import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import MainBody from "./components/MainBody.jsx";
import MidBody from "./components/MidBody.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainBody />
    <MidBody />
    <Cards />
    <Footer />
  </React.StrictMode>
);
