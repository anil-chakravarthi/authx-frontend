import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-gray-900 p-5">
      <h2 className="text-xl font-bold mb-6">AuthX</h2>

      <ul className="space-y-4">
        <li onClick={() => navigate("/dashboard")} className="cursor-pointer hover:text-purple-400">
          Dashboard
        </li>
        <li onClick={() => navigate("/profile")} className="cursor-pointer hover:text-purple-400">
          Profile
        </li>
        <li onClick={() => navigate("/settings")} className="cursor-pointer hover:text-purple-400">
          Settings
        </li>
      </ul>
    </div>
  );
}