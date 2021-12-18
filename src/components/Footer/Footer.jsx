import ReactTooltip from "react-tooltip";
import IconList from "./IconList/IconList";
import arrowUpIcon from "assets/icons/arrow-up-solid.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__upper">
          <ul className="footer__legal-list">
            <li>
              <a href="#" className="footer__legal-link">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="footer__legal-link">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="footer__legal-link">
                Terms & Conditions
              </a>
            </li>
          </ul>
          <img
            src={arrowUpIcon}
            alt="arrow-up icon"
            data-tip
            data-for="back-to-top"
            className="footer__back-to-top"
          />
          <ReactTooltip id="back-to-top" effect="solid">
            Scroll to the top
          </ReactTooltip>
          <IconList />
        </div>
        <div className="footer__lower">
          <p className="love-phrase">
            &copy; Idiom Club | Made with ❤️ by{" "}
            <a href="#" className="footer__author-link">
              oshperez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
