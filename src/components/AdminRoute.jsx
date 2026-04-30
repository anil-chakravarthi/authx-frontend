import { Navigate } from "react-router-dom";
import { getRole } from "../utils/auth";

export default function AdminRoute({ children }) {
  const role = getRole();

  if (role !== "ADMIN") {
    return <Navigate to="/dashboard" />;
  }

  return children;
}