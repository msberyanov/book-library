import React from "react";
import "./index.css"

interface TitleProps {
  title: string;
}

export const Title: React.FC<TitleProps> = ({
  title
}) => {
  return (
    <div className="title">
      {title}
    </div>
  );
}
