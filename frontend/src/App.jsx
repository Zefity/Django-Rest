import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import StyleSection from "./components/StyleSection";
import Footer from "./components/Footer/Footer";
import RegisterSection from "./components/RegisterSection";

function App() {
  const [categories, setCategories] = useState("");
  const [things, setThings] = useState("");

  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const getCategories = await axios.get(
        "http://127.0.0.1:8000/api/Category/"
      );
      const getThings = await axios.get("http://127.0.0.1:8000/api/Thing/");

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
      <RegisterSection />
      {/* <Header />
      <StyleSection things={things} isLoading={isLoading} />
      <Footer /> */}
    </>
  );
}

export default App;
