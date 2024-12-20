import React from "react";
import PropTypes from "prop-types";

const Button = ({
  title,
  type = "button",
  onClick,
  disabled = false,
  startIcon,
  className,
}) => {
  return (
    <button
      className={`flex items-center gap-x-2 text-sm font-semibold text-white bg-blue-500 py-1.5 px-3 rounded-md hover:scale-105 active:hover:scale-95 transition-all select-none ${className}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon}
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  startIcon: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
