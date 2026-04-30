import { getToken } from "../utils/auth";

const BASE_URL = import.meta.env.VITE_API_URL;

// LOGIN
export const loginUser = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  return response.json();
};

// REGISTER
export const registerUser = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(err || "Registration failed");
  }

  return response.json();
};

// GET USERS (ADMIN)
export const getAllUsers = async () => {
  const response = await fetch(`${BASE_URL}/admin/users`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (response.status === 401) {
    localStorage.clear();
    window.location.href = "/";
    return;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

// DELETE USER
export const deleteUser = async (id) => {
  const response = await fetch(`${BASE_URL}/admin/user/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (response.status === 401) {
    localStorage.clear();
    window.location.href = "/";
    return;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Delete failed");
  }

  return data;
};

// CHANGE PASSWORD
export const changePassword = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(data),
  });

  if (response.status === 401) {
    localStorage.clear();
    window.location.href = "/";
    return;
  }

  const result = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(result.message || "Password change failed");
  }

  return result;
};