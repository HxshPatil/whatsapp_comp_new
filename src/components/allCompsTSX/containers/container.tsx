import React, { FC, ReactNode } from "react";
import "./container.sass";

interface ContainerProps {
  leftHeader?: ReactNode;
  rightHeader?: ReactNode;
  content?: ReactNode;
}

const Container1: FC<ContainerProps> = ({ leftHeader, rightHeader, content }) => {
  return (
    <div className="container">
      <div className="container__header">
        <div className="header__left-header">{leftHeader}</div>
        <div className="header__right-header">{rightHeader}</div>
      </div>
      <div className="container__content">{content}</div>
    </div>
  );
}

export default Container1;