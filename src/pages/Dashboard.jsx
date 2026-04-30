import { getLoginTime, getRole } from "../utils/auth";

export default function Dashboard() {
  const loginTime = getLoginTime();
  const role = getRole();

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl mb-6">User Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-gray-800 p-6 rounded-xl">
          Activity
          <p className="mt-2 text-sm text-gray-400">
            Last Login: {new Date(parseInt(loginTime)).toLocaleString()}
          </p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          Stats
          <p className="mt-2 text-sm text-gray-400">
            Role: {role}
          </p>
        </div>

      </div>
    </div>
  );
}