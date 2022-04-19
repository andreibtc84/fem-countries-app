import React from "react";

export const Toggle = () => {
  return (
    <label className="label">
      <div className="toggle">
        <input
          className="toggle-state"
          type="checkbox"
          name="check"
          value="check"
        />
        <div className="indicator"></div>
      </div>
      <div className="label-text">Dark Mode</div>
    </label>
  );
};
