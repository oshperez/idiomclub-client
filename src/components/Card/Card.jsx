import Bookmark from "components/Bookmark/Bookmark";
import { ReactComponent as ArrowIcon } from "assets/icons/arrow-right.svg";

import "./Card.css";

const Card = ({ cardInfo }) => {
  const { contributor, img, idiom, date } = cardInfo;

  return (
    <div className="card">
      <div className="card__header">
        <span className="card__contributor">
          Contributor:{" "}
          <a href="#" className="card__contributor-link">
            {contributor}
          </a>
        </span>
        <Bookmark />
      </div>
      <img src={img} alt="" className="card__image" />
      <p className="card__idiom">{idiom}</p>
      <div className="card__footer">
        <div className="card__footer-inner">
          <a href="#" className="card__footer-link">
            See more
          </a>
          <ArrowIcon style={{ cursor: "pointer" }} />
        </div>
        <span className="card__date">{date}</span>
      </div>
    </div>
  );
};

export default Card;
