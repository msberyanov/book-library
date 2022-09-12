import "./index.css"
import React, { useCallback, useMemo, useState } from "react";
import { tuple } from "../../utils/tuple";

export const useTooltip = (
  content: React.ReactNode
) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => setVisible(prev => !prev), []);

  const Tooltip = useMemo(() => {
    return (
      <div
        className="tooltip"
        style={{
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? "auto" : "none",
          cursor: visible ? "auto" : "initial"
      }}
      >
        {content}
      </div>
    );
  }, [content, visible]);

  return tuple(
    visible,
    setVisible,
    toggleVisible,
    Tooltip
  )
}
