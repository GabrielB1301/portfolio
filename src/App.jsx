import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import MobileMenu from "./components/navbar/MobileMenu";
import Hero from "./components/sections/Hero";
import { useState } from "react";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Background />
      <Navbar onMenuOpen={setMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} onMenuOpen={setMenuOpen} />
      <Hero />
    </>
  );
}

export default App;
