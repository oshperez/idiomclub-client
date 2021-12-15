import AnimatedHeading from "componenets/AnimatedHeading/AnimatedHeading";
import { ReactComponent as PeopleImg } from "assets/imgs/people.svg";

import "./HeroContent.css";
import "componenets/Button/Button.css";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <div className="hero-content__text-wrapper">
        <AnimatedHeading>
          <h2 className="hero-content__subheading">Featured Idiom</h2>
        </AnimatedHeading>
        <h1 className="hero-content__heading">
          The apple does not fall far from the tree
        </h1>
        <p className="hero-content__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores nisi
          harum repellendus deleniti, beatae tenetur dolore ex voluptatum
          tempora adipisci molestias accusamus incidunt quidem veniam, sapiente
          perspiciatis
        </p>
        <a href="#" className="button button--theme-outline-shadow">
          See More...
        </a>
      </div>
      <PeopleImg className="hero-content__image" />
    </div>
  );
};

export default HeroContent;
