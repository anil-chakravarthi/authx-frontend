import { useEffect, useState } from "react";
import { getAllUsers, deleteUser } from "../services/api";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [totalUsers, setTotalUsers] = useState(0);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();

      if (!data) return;

      setUsers(data);
      setFilteredUsers(data);
      setTotalUsers(data.length);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔍 SEARCH
  useEffect(() => {
    const result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(result);
  }, [search, users]);

  // ❌ DELETE
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* STATS */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-6 rounded-xl">
          Total Users
          <div className="text-2xl mt-2">{totalUsers}</div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          Activity (Coming Soon)
        </div>

        <div className="bg-gray-800 p-6 rounded-xl">
          Stats (Coming Soon)
        </div>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search by name or email..."
        className="w-full mb-4 p-2 rounded bg-gray-800"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLE */}
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-700">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No users found
                </td>
              </tr>
            ) : (
              filteredUsers.map((u) => (
                <tr key={u.id} className="border-t border-gray-700">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.role}</td>
                  <td className="p-3">
                    <button
                      onClick={() => handleDelete(u.id)}
                      className="bg-red-500 px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}