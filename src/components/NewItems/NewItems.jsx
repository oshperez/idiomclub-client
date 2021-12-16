import CardCollection from "components/CardCollection/CardCollection";

import "./NewItems.css";

const NewItems = () => {
  return (
    <div>
      <h1 className="new-items__heading">Recently Added </h1>
      <p className="new-items__paragraph">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
        doloribus quod dolore dolorum perspiciatis saepe vel est sequi debitis
        sit quis nostrum eius vero tempora
      </p>
      <CardCollection />
    </div>
  );
};

export default NewItems;
