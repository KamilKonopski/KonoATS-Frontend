export const setAuthStorage = (token: string, remember: boolean) => {
  if (remember) {
    localStorage.setItem("token", token);
    sessionStorage.removeItem("token");
  } else {
    sessionStorage.setItem("token", token);
    localStorage.removeItem("token");
  }
};

export const clearAuthStorage = () => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};

export const getAuthFromStorage = () => {
  const tokenFromLocal = localStorage.getItem("token");
  const tokenFromSession = sessionStorage.getItem("token");

  if (tokenFromLocal) {
    return { token: tokenFromLocal, remember: true };
  }

  if (tokenFromSession) {
    return { token: tokenFromSession, remember: false };
  }

  return { token: null, remember: false };
};
