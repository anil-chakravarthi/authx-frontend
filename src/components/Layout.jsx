import { Outlet, useNavigate } from "react-router-dom";
import { logout, getEmail } from "../utils/auth";

export default function Layout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-950 text-white">

      {/* Sidebar */}
      <div className="w-60 bg-gray-900 p-5 space-y-6">
        <h1 className="text-xl font-bold">AuthX</h1>

        <nav className="space-y-3">
          <p className="cursor-pointer" onClick={() => navigate("/dashboard")}>Dashboard</p>
          <p className="cursor-pointer" onClick={() => navigate("/profile")}>Profile</p>
          <p className="cursor-pointer" onClick={() => navigate("/settings")}>Settings</p>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1">

        {/* Top Bar */}
        <div className="flex justify-between items-center p-4 bg-gray-900">
          <h2>Dashboard</h2>

          <div className="flex gap-4 items-center">
            <span>{getEmail()}</span>
            <button
              onClick={handleLogout}
              className="bg-purple-600 px-4 py-1 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Page */}
        <div className="p-6">
          <Outlet />
        </div>

      </div>
    </div>
  );
}