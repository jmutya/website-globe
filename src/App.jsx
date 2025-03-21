import React from "react";
import Navbar from "./components/header/navbar/navbar";
import Footer from "./components/footer/footer";
import MainContent from "./components/main/MainContent";

const app =() => {
  return (
    <div>
    <Navbar />
    <MainContent />
    <Footer/>
    </div>
  );
};
export default app;