import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./style.css";

import "react-circular-progressbar/dist/styles.css";

const CircleRating = ({ rating }) => {
  return (
    <div className="circleRating w-[70px]">
      <CircularProgressbar
        value={rating}
        maxValue={10}
        text={rating}
        styles={buildStyles({
          pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "blue",
        })}
      />
    </div>
  );
};

export default CircleRating;
