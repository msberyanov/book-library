import { MdExpandMore } from "react-icons/md";
import React from "react";
import "./index.css"
import { useTooltip } from "../../hooks/use-tooltip";

interface NavButtonMoreProps {
  color: string;
  background: string;
  navButtons: React.ReactElement[];
}

export const NavButtonMore: React.FC<NavButtonMoreProps> = ({
  color,
  background,
  navButtons
}) => {
  const [, , toggleVisible, Tooltip] = useTooltip(navButtons);

  return (
    <div
      className="header-nav-more"
      style={{
        background: background,
        color: color
      }}
      onClick={toggleVisible}
    >
      <MdExpandMore/>
      {Tooltip}
    </div>
  )
}
