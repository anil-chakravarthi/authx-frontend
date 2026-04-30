import { getEmail, getRole } from "../utils/auth";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl mb-6">Profile</h1>

      <div className="bg-gray-800 p-6 rounded-xl">
        <p>Email: {getEmail()}</p>
        <p className="mt-2">Role: {getRole()}</p>
      </div>
    </div>
  );
}