import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/api";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(form);
      alert("Registration successful");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-800 p-8 rounded-xl w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            name="name"
            placeholder="Name"
            className="w-full p-2 rounded bg-gray-900"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-900"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-900"
            onChange={handleChange}
            required
          />

          {error && <p className="text-red-400">{error}</p>}

          <button className="w-full bg-purple-600 py-2 rounded">
            Register
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <span
            className="text-purple-400 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}