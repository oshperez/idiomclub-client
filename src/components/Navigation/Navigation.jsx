import NavigationLink from "components/NavigationLink/NavigationLink";

import homeIcon from "assets/icons/home-solid.svg";
import bookIcon from "assets/icons/book-solid.svg";
import commentIcon from "assets/icons/comments-solid.svg";
import searchIcon from "assets/icons/search-solid.svg";

import "./Navigation.css";

const navigationLinkArr = [
  { text: "Home", icon: homeIcon },
  { text: "Idioms", icon: bookIcon },
  { text: "Q&A", icon: commentIcon },
  { text: "Search", icon: searchIcon },
];

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navigationLinkArr.map((link) => (
          <li className="navigation__item">
            <NavigationLink
              key={`${link.text}-link`}
              text={link.text}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
