import React from "react";
import styles from "./Toggle.module.css";

const CustomCheckbox = ({ isAutomatic, onToggle }) => {
  const handleChange = () => {
    onToggle();
  };

  return (
    <div className={styles.checkbox_wrapper}>
      <input
        id="cbx-51"
        type="checkbox"
        checked={isAutomatic}
        onChange={handleChange}
      />
      <label className={styles.toggle} htmlFor="cbx-51">
        <span>
          <svg viewBox="0 0 10 10" height="10px" width="10px">
            <path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z"></path>
          </svg>
        </span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
