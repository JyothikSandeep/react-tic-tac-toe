import React from "react";
import "./reset.css";
function Reset({ resetBoard }) {
  return (
    <div>
      <button className="btn" onClick={resetBoard}>
        Reset
      </button>
    </div>
  );
}

export default Reset;
