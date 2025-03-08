import { useState, useEffect } from "react";
import { AuthClient } from "@dfinity/auth-client";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    (async () => {
      const authClient = await AuthClient.create();
      setIsAuthenticated(await authClient.isAuthenticated());
    })();
  }, []);

  const logout = async () => {
    const authClient = await AuthClient.create();
    await authClient.logout();
    window.location.reload();
  };

  return { isAuthenticated, logout };
};
