export const setAuthStorage = (email: string, token: string) => {
  localStorage.setItem("token", token);
  localStorage.setItem("userEmail", email);
};

export const clearAuthStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
};

export const getAuthFromStorage = () => {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("userEmail");
  return { token, email };
};
