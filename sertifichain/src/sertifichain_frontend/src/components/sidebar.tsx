import { Link } from "@tanstack/react-router";
import { useState } from "react";

const username = "Joko Jempol";

const Sidebar = () => {
    const [ active, setActive ] = useState("Home");

    const navItems = [
        { name: "Daftar Kepemilikan", icon: "/icon/daftar_kepemilikan.png", route: "/dashboard" },
        { name: "Pindah Tangan Sertifikat", icon: "/icon/pindah_tangan.png", route: "/dashboard/pindah_tangan" },
        { name: "Aktivitas", icon: "/icon/aktivitas.png", route: "/dashboard/aktivitas" }
    ];

    return (
        <nav className="flex flex-col bg-gradient-to-b from-[#050C1B] to-[#183981] mx-8 my-8 rounded-xl shadow-md shadow-gray-300 min-h-screen max-w-64 mr-12">
            <div className="h-full w-full bg-[url('/background/sidebar.png')] bg-cover bg-center pt-6 px-4 rounded-t-xl flex flex-col justify-between">
                <Link className="flex items-start space-x-2 ml-4" to="/home">
                    <img src="/icon/back_arrow.png" />
                    <span className="text-2xl font-bold leading-tight text-white mt-0.5 text-shadow-lg">SertifiChain</span>
                </Link>

                <div className="flex flex-col space-y-4 w-full items-start">
                    {navItems.map((item) => (
                        <Link
                            to={item.route}
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all text-left min-h-12 min-w-full text-white
                            ${active === item.name ? "bg-white/25 font-bold shadow-md" : "hover:bg-white/10"}`}
                        >
                            <img src={item.icon} className="w-6 h-6" />
                            <span className="whitespace-normal break-words"> {item.name} </span>
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col text-white justify-center py-8">
                    <button className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all hover:bg-white/10">
                        <img src={"/icon/profile.png"} className="w-6 h-6" />
                        <span className="whitespace-normal break-words text-lg">{username}</span>
                    </button>
                    <button className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all hover:bg-white/10">
                        <img src={"/icon/logout.png"} className="w-6 h-6" />
                        <span className="whitespace-normal break-words text-lg">Log Out</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
