import React from "react";
import { FaDog } from "react-icons/fa";
import "./index.css"

export const Logo = () => {
  return (
    <div className="logo">
      <FaDog className="logo-icon"/>
      <div>ShiBook Library</div>
    </div>
  )
}
