import React from "react";
import "./index.css"
import { FiActivity, FiBook, FiBookmark, FiClock, FiStar } from "react-icons/fi";
import { capitalizeFirstLetter } from "../../../utils/capitalize-first-letter";
import { NavType } from "../../../theme";
import { formatDate } from "../../../utils/format-date";

export type ButtonType = "favourites" | "finishes" | "currents" | "wishes";

const typedButtons = {
  "favourites": <FiStar className="button-icon"/>,
  "finishes": <FiBook className="button-icon"/>,
  "currents": <FiBookmark className="button-icon"/>,
  "wishes": <FiActivity className="button-icon"/>,
}

interface ButtonProps {
  type: ButtonType;
  navType: NavType;
  extended: boolean;
  onClick: () => void;
  date?: Date;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  navType,
  extended,
  onClick,
  date
}) => {
  return (
    <>
      <div
        className={`button ${extended ? "button-selected" : "button-unselected"}`}
        onClick={onClick}
      >
        {typedButtons[type]}
        {extended ? `In ${capitalizeFirstLetter(type)}` : ""}
      </div>
      {date && navType !== "my-books"
        ? <div className="button date button-unselected"><FiClock className="button-icon"/>{formatDate(date)}</div>
        : null}
    </>
  )
}
