import { cards } from "./CardCollection.data";
import Card from "componenets/Card/Card";

import "./CardCollection.css";

const CardCollection = () => {
  return (
    <div className="card-grid">
      {cards.map((card) => (
        <Card key={card.idiom} cardInfo={card} />
      ))}
    </div>
  );
};

export default CardCollection;
