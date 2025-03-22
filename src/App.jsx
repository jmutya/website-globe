import React from "react";
import Navbar from "./components/header/navbar/navbar";
import Footer from "./components/footer/footer";
import MainContent from "./components/main/MainContent";
import "./App.css";

const app = () => {
  return (
    <section className="app">
      <div className="app-container">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </section>
  );
};
export default app;
