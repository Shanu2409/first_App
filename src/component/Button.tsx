import { useState } from "react";

interface Prop {
  children: string;
  onC: () => void;
  color?: "primary" | "secondary" | "danger"; // only specified vales are accepeted
}

const Button = ({ children, onC, color = "primary" }: Prop) => {
  return (
    <div className={"btn btn-outline-" + color} onClick={onC}>
      {children}
    </div>
  );
};

export default Button;
