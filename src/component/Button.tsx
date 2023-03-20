import { useState } from "react";

interface Prop {
  children: string;
  onC: (text: string) => void;
}

const Button = ({ children, onC }: Prop) => {
  return (
    <div
      className={"btn btn-outline-" + children}
      onClick={() => {
        onC(children);
      }}
    >
      {children}
    </div>
  );
};

export default Button;
