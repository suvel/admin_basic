import React from "react";
import "./style.css";

/**
 types:-
 outline
 solid
 */

/*
variants:-
carefree - no side effects
alert - has sever side effects
mr_white - has no side effects
*/

const Button = ({
  type = "solid",
  variant = "carefree",
  children,
  ...props
}) => {
  return (
    <button className={`Button ${type} ${variant}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
