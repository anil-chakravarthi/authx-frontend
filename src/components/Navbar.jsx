import { useNavigate } from "react-router-dom";
import { logout, getEmail } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const email = getEmail();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-gray-900 p-4 flex justify-between items-center">
      <h1>Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-300">{email}</span>

        <button
          onClick={handleLogout}
          className="bg-purple-600 px-4 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}