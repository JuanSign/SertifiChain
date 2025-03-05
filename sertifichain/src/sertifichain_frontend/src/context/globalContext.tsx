import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const RouteContext = createContext({ isHome: false });

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const routerState = useRouterState(); // Get the router state
  const currentRoute = routerState?.location.pathname ?? ""; // Ensure no crash
  const [isHome, setIsHome] = useState(currentRoute.startsWith("/home"));

  useEffect(() => {
    if (routerState) {
      setIsHome(currentRoute.startsWith("/home"));
    }
  }, [routerState, currentRoute]);

  return <RouteContext.Provider value={{ isHome }}>{children}</RouteContext.Provider>;
};

export const useRouteContext = () => useContext(RouteContext);
