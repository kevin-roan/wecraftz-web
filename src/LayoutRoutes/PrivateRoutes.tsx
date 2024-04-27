import { Outlet } from "react-router-dom";
import Login from "../pages/Login";
import React from "react";

interface User {
  uid: string;
  email: string;
}

interface Props {
  isUser: User | null;
}

const PrivateRoutes: React.FC<Props> = ({ isUser }) => {
  return isUser ? <Outlet /> : <Login />;
};
export default PrivateRoutes;
