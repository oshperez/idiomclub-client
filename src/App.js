import { useState, useEffect } from "react";

import Header from "components/Header/Header";
import Section from "components/Section/Section";
import HeroContent from "components/HeroContent/HeroContent";
import NewItems from "components/NewItems/NewItems";
import Newsletter from "components/Newsletter/Newsletter";

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
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
}

export default App;
