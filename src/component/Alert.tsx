import { ReactNode } from "react";

interface Prop {
  children: ReactNode;
}

const Alert = ({ children }: Prop) => {
  return <div className="alert alert-warning">{children}</div>;
};

export default Alert;
