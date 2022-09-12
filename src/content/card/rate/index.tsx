import React from "react";
import "./index.css"
import { FaStar } from "react-icons/fa";
import { v4 } from "uuid";

interface RateProps {
  rate: number;
  onClick: (value: number) => void;
}

export const Rate: React.FC<RateProps> = ({
  rate,
  onClick
}) => {
  const randomUUIDs = [v4(), v4(), v4(), v4(), v4()];

  return (
    <div className="rate">
      {[...Array(5)].map((_, index) =>
        <FaStar
          key={index}
          id={randomUUIDs[index]}
          className={index < rate ? "star-selected" : "star-unselected"}
          onMouseEnter={() => {
            for (let i = 0; i <= index; i++) {
              document.getElementById(randomUUIDs[i])?.classList.add("star-selecting");
            }
          }}
          onMouseLeave={() => {
            for (let i = 0; i <= index; i++) {
              document.getElementById(randomUUIDs[i])?.classList.remove("star-selecting");
            }
          }}
          onClick={() => {
            onClick(index + 1);
            for (let i = 0; i <= index + 1; i++) {
              document.getElementById(randomUUIDs[i])?.classList.remove("star-selecting");
            }
          }}
        />
      )}
    </div>
  )
}
