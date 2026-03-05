import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <MainSection />

      <Footer />
    </>
  );
}

export default App;
