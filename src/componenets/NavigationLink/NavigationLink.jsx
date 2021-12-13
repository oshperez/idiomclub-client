import "./NavigationLink.css";

const NavigationLink = ({ text, icon }) => {
  return (
    <a href="#" className="navigation__link">
      <img src={icon} alt="icon" className="navigation__link-icon" />
      {text}
    </a>
  );
};

export default NavigationLink;
