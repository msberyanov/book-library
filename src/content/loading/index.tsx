import "./index.css"
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

export const Loading: React.FC = () => {
  return (
    <div className="loading-area">
      <div className="loading loading-appearance">
        <BiLoaderCircle className="loading-icon"/> Loading
      </div>
    </div>
  )
}
