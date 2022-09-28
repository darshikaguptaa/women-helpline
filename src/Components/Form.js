import React from "react";
import "../App.css";

export default function Form() {
  return (
    <div
      className="formdiv"
      style={{
        position: "relative",
        top: "130px",
        left: "60%",
        lineHeight: "2",
      }}
    >
      <form
        style={{
          backgroundColor: "#ffc6b4",
          color: "#4142a1",
          width: "30%",
          borderRadius: "15px",
          //   border: "solid 2px #4142a1",
          padding: "40px",
          boxShadow: "gray 4px 4px 10px 10px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Your Details</h3>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="email"
            class="form-control"
            id="age"
            aria-describedby="emailHelp"
            placeholder="Enter your Age"
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Female
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Kid
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label" for="exampleRadios2">
            Senior Citizen
          </label>
        </div>
        <br />
        <button
          style={{ position: "relative", left: "40%" }}
          type="submit"
          class="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
