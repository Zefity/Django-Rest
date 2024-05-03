import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import StyleSection from "./components/StyleSection";
import Footer from "./components/Footer/Footer";
import RegistrationSection from "./components/RegistrationSection";
import LoginSection from "./components/LoginSection";
import ProfileSection from "./components/ProfileSection";
import BasketSection from "./components/BasketSection";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<StyleSection />} />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/registration" element={<RegistrationSection />} />
          <Route path="/profile" element={<ProfileSection />} />
          <Route path="/basket" element={<BasketSection />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
