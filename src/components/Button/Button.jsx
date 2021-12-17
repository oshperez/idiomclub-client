import "./Button.css";

const Button = ({ text, className }) => {
  return <button className={`button ${className}`}>{text}</button>;
};

export default Button;
