import mark from "assets/imgs/mark.png";
import wordmark from "assets/imgs/wordmark.png";

import "./Logo.css";

const Logo = ({ hiddenWordmark }) => {
  return (
    <a href="#" className="logo">
      <img src={mark} alt="mark" className="logo__mark" />
      {!hiddenWordmark ? (
        <img src={wordmark} alt="wordmark" className="logo__wordmark" />
      ) : null}
    </a>
  );
};

export default Logo;
