import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import StyleSection from "./components/StyleSection";
import Footer from "./components/Footer/Footer";
import RegistrationSection from "./components/RegistrationSection";
import LoginSection from "./components/LoginSection";
import ProfileSection from "./components/ProfileSection";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [categories, setCategories] = useState("");
  const [things, setThings] = useState("");

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [isLoading, setisLoading] = useState(true);

  // if (localStorage.getItem("accessToken") != null) {
  //   setIsAuthenticated(true);
  // }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const getCategories = await axios.get(
        "http://127.0.0.1:8000/api/category/"
      );
      const getThings = await axios.get("http://127.0.0.1:8000/api/thing/");

      setCategories(getCategories.data);
      setThings(getThings.data);
      setisLoading(false);
      console.log(getThings.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={<StyleSection things={things} isLoading={isLoading} />}
          />
          <Route path="/login" element={<LoginSection />} />
          <Route path="/registration" element={<RegistrationSection />} />
          <Route path="/profile" element={<ProfileSection />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
