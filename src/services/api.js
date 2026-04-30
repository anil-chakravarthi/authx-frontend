import { getToken } from "../utils/auth";

const BASE_URL = import.meta.env.VITE_API_URL || "https://authx-secure-auth-system-production.up.railway.app";

// Helper to parse response safely
const handleResponse = async (response) => {
  let data;

  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok) {
    throw new Error(data.error || data.message || "Something went wrong");
  }

  return data;
};

// LOGIN
export const loginUser = async (credentials) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  return handleResponse(response);
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

  return handleResponse(response);
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

  return handleResponse(response);
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

  return handleResponse(response);
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

  return handleResponse(response);
};