import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons";

const Recommended = ({ handleClick }) => {
  return (
    <div>
      <h2 className="recommended-title">Recommened</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Food" title="Food" />
        <Buttons
          onClickHandler={handleClick}
          value="Cosmetics"
          title="Cosmetics"
        />
        <Buttons
          onClickHandler={handleClick}
          value="Medicine"
          title="Medicine"
        />
        <Buttons
          onClickHandler={handleClick}
          value="Clothing"
          title="Clothing"
        />
      </div>
    </div>
  );
};

export default Recommended;
