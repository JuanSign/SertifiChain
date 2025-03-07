import { useRouteContext } from "../context/globalContext";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { firstRoute } = useRouteContext();
  
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-[#0F172A] to-[#0A0F1E]">
      <div className={`flex ${firstRoute === "home" ? "flex-col" : "flex-row"}`}>
        {firstRoute === "home" ? <Navbar /> : firstRoute === "dashboard" ? <Sidebar /> : null}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
