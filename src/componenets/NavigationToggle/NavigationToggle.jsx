import "./NavigationToggle.css"

const NavigationToggle = ({handleToggleNavigationMenu}) => {
  return (
    <button className="navigation__toggle" onClick={handleToggleNavigationMenu}>
      <div className="navigation__toggle-icon" ></div>
    </button>
  );
}

export default NavigationToggle;