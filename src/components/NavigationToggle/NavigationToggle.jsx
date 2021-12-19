import ReactTooltip from "react-tooltip";

import "./NavigationToggle.css";

const NavigationToggle = ({ isNavigationOpen, handleToggleNavigationMenu }) => {
  return (
    <>
      <button
        data-tip
        data-for="bar-menu"
        className="navigation__toggle"
        onClick={handleToggleNavigationMenu}
      >
        <div className="navigation__toggle-icon"></div>
      </button>
      <ReactTooltip id="bar-menu" effect="solid" place="left">
        {isNavigationOpen ? "Close menu" : "Open menu"}
      </ReactTooltip>
    </>
  );
};

export default NavigationToggle;
