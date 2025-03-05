import { useGlobalContext } from "../context/globalContext";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { showNavBar, setShowNavBar } = useGlobalContext();

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-b from-[#0F172A] to-[#0A0F1E]">
      <div className={`flex ${showNavBar ? "flex-col" : "flex-row"}`}>
        {showNavBar ? <Navbar /> : <Sidebar />}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
