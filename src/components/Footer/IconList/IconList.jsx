import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";
import telegramIcon from "assets/icons/telegram.svg";

import "./IconList.css";

const IconList = () => {
  return (
    <ul className="social-media-list">
      <li className="social-media-list__item">
        <img
          src={facebookIcon}
          alt="facebook logo mark"
          className="social-media-list__icon"
        />
      </li>
      <li className="social-media-list__item">
        <img
          src={instagramIcon}
          alt="instagram logo mark"
          className="social-media-list__icon"
        />
      </li>
      <li className="social-media-list__item">
        <img
          src={twitterIcon}
          alt="twitter logo mark"
          className="social-media-list__icon"
        />
      </li>
      <li className="social-media-list__item">
        <img
          src={telegramIcon}
          alt="telegram logo mark"
          className="social-media-list__icon"
        />
      </li>
    </ul>
  );
};

export default IconList;
