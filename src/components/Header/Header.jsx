import { useState, useEffect, useRef } from "react";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import NavigationToggle from "components/NavigationToggle/NavigationToggle";

import "./Header.css";

const Header = ({ handleToggleNavigationMenu }) => {
  const [headerClass, setHeaderClass] = useState("header");
  const top = useRef(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    let offset = window.scrollY;

    if (offset > 10 && offset >= top.current) {
      setHeaderClass("header header--small");
    } else {
      setHeaderClass("header");
    }

    top.current = offset;
  };

  return (
    <header
      className={`${headerClass}`}
      style={
        headerClass === "header header--small"
          ? {
              backgroundColor: "transparent",
              boxShadow: "none",
            }
          : {
              backgroundColor: "var(--white-shade)",
              boxShadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
            }
      }
    >
      <div className="header__inner container">
        <Logo
          hiddenWordmark={headerClass === "header header--small" ? true : false}
        />
        {headerClass === "header" ? (
          <>
            <Navigation />
            <a href="#" className="header__sign-up-link">
              Sign up
            </a>
            <NavigationToggle
              handleToggleNavigationMenu={handleToggleNavigationMenu}
            />
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
