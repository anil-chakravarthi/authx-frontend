export const setAuth = (token, role, email, loginTime) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
  localStorage.setItem("email", email);
  localStorage.setItem("loginTime", loginTime);
};

export const getToken = () => localStorage.getItem("token");
export const getRole = () => localStorage.getItem("role");
export const getEmail = () => localStorage.getItem("email");
export const getLoginTime = () => localStorage.getItem("loginTime");

export const logout = () => {
  localStorage.clear();
  window.location.href = "/";
};