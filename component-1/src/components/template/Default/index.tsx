import React from "react";
import "./index.css";

interface TwoPanelTemplateProps {
  leftContent?: React.ReactNode;
  rightContent: React.ReactNode;
}

const TwoPanelTemplate: React.FC<TwoPanelTemplateProps> = ({
  leftContent,
  rightContent,
}) => {
  return (
    <div className="two-panel-template">
      <div className="left-panel">{leftContent}</div>
      <div className="right-panel">{rightContent}</div>
    </div>
  );
};

export default TwoPanelTemplate;
