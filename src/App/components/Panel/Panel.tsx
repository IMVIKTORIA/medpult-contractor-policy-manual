import React, { useState } from "react";

/** Сворачиваемая панель */
function Panel({ children, label = "", isRollable = true, isOpen = true }) {
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(isOpen);

  const handleClick = () => {
    if (!isRollable) return;
    setIsPanelOpen(!isPanelOpen);
  };

  let triangleElement: any = null;
  if (isRollable) {
    triangleElement = (
      <span
        className={
          isPanelOpen
            ? "medpult-panel-mcp__triangle medpult-panel-mcp__triangle_open"
            : "medpult-panel-mcp__triangle"
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19 16L5 16L12 8L19 16Z" fill="#45B0E6" />
        </svg>
      </span>
    );
  }

  return (
    <div className="medpult-panel-mcp">
      <div
        className={
          isPanelOpen
            ? "medpult-panel-mcp__header"
            : "medpult-panel-mcp__header medpult-panel-mcp__header_closed"
        }
        style={isRollable ? { cursor: "pointer" } : { cursor: "text" }}
        onClick={handleClick}
      >
        <span className="medpult-panel-mcp__label">{label}</span>
        {triangleElement}
      </div>
      <div
        className={
          isPanelOpen
            ? "medpult-panel-mcp__content"
            : "medpult-panel-mcp__content_hidden"
        }
      >
        {children}
      </div>
    </div>
  );
}

export default Panel;
