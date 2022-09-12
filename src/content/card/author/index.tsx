import React from "react";
import "./index.css"

interface AuthorProps {
  author: string;
}

export const Author: React.FC<AuthorProps> = ({
  author
}) => {
  return (
    <div className="author">
      {author}
    </div>
  );
}
