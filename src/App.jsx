import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import MobileMenu from "./components/navbar/MobileMenu";
import { useState } from "react";
function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Background />
      <Navbar onMenuOpen={setMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} onMenuOpen={setMenuOpen} />
    </>
  );
}

export default App;
