import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

const RouteContext = createContext({ firstRoute: "" });

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const routerState = useRouterState();
  const currentRoute = routerState?.location.pathname ?? "";
  const [firstRoute, setFirstRoute] = useState(currentRoute.split("/")[1] || "");

  useEffect(() => {
    if (routerState) {
      setFirstRoute(currentRoute.split("/")[1] || "");
    }
  }, [routerState, currentRoute]);

  return <RouteContext.Provider value={{ firstRoute }}>{children}</RouteContext.Provider>;
};

export const useRouteContext = () => useContext(RouteContext);
