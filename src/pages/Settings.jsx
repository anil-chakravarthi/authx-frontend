import { useState } from "react";
import { changePassword } from "../services/api";
import { getRole } from "../utils/auth";

export default function Settings() {
  const role = getRole();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      await changePassword({ oldPassword, newPassword });
      setMessage("Password updated successfully");
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2xl mb-6">Settings</h1>

      {/* ONLY USER CAN SEE */}
      {role === "USER" && (
        <form
          onSubmit={handleChangePassword}
          className="bg-gray-800 p-6 rounded-xl space-y-4 max-w-md"
        >
          <h2 className="text-lg font-bold">Change Password</h2>

          <input
            type="password"
            placeholder="Old Password"
            className="w-full p-2 rounded bg-gray-900"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full p-2 rounded bg-gray-900"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <button className="bg-purple-600 px-4 py-2 rounded">
            Update Password
          </button>

          {message && (
            <p className="text-sm mt-2 text-green-400">{message}</p>
          )}
        </form>
      )}

      {/* ADMIN MESSAGE */}
      {role === "ADMIN" && (
        <div className="bg-gray-800 p-6 rounded-xl">
          Password change is disabled for admin.
        </div>
      )}
    </div>
  );
}