import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ isOutline, icon, text, ...rest }) => {
  return (
    <button {...rest} className={isOutline ? "outlineBtn" : "primaryBtn"}>
      {icon}
      {text}
    </button>
  );
};

Button.propTypes = {
  isOutline: PropTypes.bool,
  icon: PropTypes.element,
  text: PropTypes.string,
};

export default Button;
