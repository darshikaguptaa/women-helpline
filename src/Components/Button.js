import React from "react";
import "../App.css";

export default function Button() {
  return (
    <div>
      <button
        style={{
          position: "relative",
          left: "20%",
          bottom: "150px",
          padding: "10px",
          width: "200px",
          height: "70px",
          fontSize: "30px",
          backgroundColor: "red",
          color: "white",
          border: "white",
          borderRadius: "7px",
          boxShadow: "gray 4px 4px 10px 10px",
        }}
        id="emergency"
      >
        Emergency
      </button>
    </div>
  );
}
