import React, { ReactNode } from "react";
import Menu from "../Menu";

interface Props {
  children: ReactNode
}

const DefaultTemplate = ({ children }:Props) => {
  return (
    <div>
      <Menu></Menu>
      <main>{children}</main>
    </div>
  );
};

export default DefaultTemplate;
