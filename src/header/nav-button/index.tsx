import React from "react";
import "./index.css"
import { NavType, NavTypes } from "../../theme";
import { useBookLibraryContext } from "../../book-library";

interface NavButtonProps {
  type: NavType;
  icon: React.ReactElement;
  selected: boolean;
  onClick: () => void;
}

export const NavButton: React.FC<NavButtonProps> = ({
  type,
  icon,
  selected,
  onClick
}) => {
  const {setBooks} = useBookLibraryContext();

  return (
    <div
      className={`nav-button no-select no-caret ${selected ? "selected" : ""}`}
      onMouseEnter={() => {
        document.documentElement.style.setProperty("--next-color", NavTypes[type].color);
      }}
      onClick={() => {
        document.documentElement.style.setProperty("--background-color", NavTypes[type].backgroundColor)
        document.documentElement.style.setProperty("--main-color", NavTypes[type].color)

        setBooks([]);
        onClick();
      }}
    >
      {icon}
      {NavTypes[type].title}
    </div>
  )
}
