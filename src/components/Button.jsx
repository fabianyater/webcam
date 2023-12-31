import React from "react";
import styles from "./Button.module.css";

function Button({
  onClick,
  label,
  title,
  isActive,
  children,
  backgroundColor,
  activeBackgroundColor,
  inactiveBackgroundColor,
  disabled,
  margin,
}) {
  const buttonStyle = isActive
    ? { background: activeBackgroundColor || backgroundColor }
    : { background: inactiveBackgroundColor || backgroundColor };

  return (
    <button
      disabled={disabled}
      style={buttonStyle}
      className={`${styles.toggleButton} ${
        isActive === false
          ? styles.toggleButtonInactive
          : styles.toggleButtonActive
      } ${margin && styles.margin} `}
      onClick={onClick}
      title={title}
    >
      {children}
      {label && <p>{label}</p>}
    </button>
  );
}

export default Button;
