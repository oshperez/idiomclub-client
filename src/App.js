import { useState, useEffect } from "react";

import Header from "componenets/Header/Header";
import Section from "componenets/Section/Section";
import HeroContent from "componenets/HeroContent/HeroContent";
import NewItems from "componenets/NewItems/NewItems";

import "./App.css";

function App() {
  const [isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isNavigationMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isNavigationMenuOpen]);

  const handleToggleNavigationMenu = () => {
    setIsNavigationMenuOpen(!isNavigationMenuOpen);
  };

  return (
    <div
      className={`app ${isNavigationMenuOpen ? "navigation-menu--open" : ""}`}
    >
      <Header handleToggleNavigationMenu={handleToggleNavigationMenu} />
      <Section>
        <HeroContent />
      </Section>
      <Section>
        <NewItems />
      </Section>
    </div>
  );
}

export default App;
