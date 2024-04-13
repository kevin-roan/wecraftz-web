import React from "react";
import { ReactNode } from "react";

interface BottomLayoutProps {
  children: ReactNode;
}

const BottomLayout: React.FC<BottomLayoutProps> = ({ children }) => {
  return <>{children}</>;
};
export default BottomLayout;
