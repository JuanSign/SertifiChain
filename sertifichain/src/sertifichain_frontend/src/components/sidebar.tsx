import { useState } from "react";

const Sidebar = () => {
    const [ active, setActive ] = useState("Home");

    const navItems = [
        { name: "Daftar Kepemilikan", icon: "/icons/home.png" },
        { name: "Pindah Tangan Sertifikat", icon: "/icons/profile.png" },
        { name: "Aktivitas", icon: "/icons/settings.png" }
    ];

    return (
        <nav className="flex flex-col bg-gradient-to-b from-[#050C1B] to-[#183981] mx-8 my-8 rounded-xl shadow-md shadow-gray-300">
            <div className="h-full w-full bg-[url('/background/sidebar.png')] bg-cover bg-center pt-6 px-8 rounded-t-xl flex flex-col justify-between">
                <button className="flex items-start space-x-2" >
                    <img src="/components/back_arrow.png" />
                    <span className="text-2xl font-bold leading-tight text-white mt-0.5 text-shadow-lg">SertifiChain</span>
                </button>

                <div className="flex flex-col space-y-4 w-full items-start">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => setActive(item.name)}
                            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all text-left
                            ${active === item.name ? "bg-white text-[#183981] font-bold shadow-md" : "text-white hover:bg-white/10"}`}
                        >
                            <img src={item.icon} className="w-6 h-6" />
                            <span className="whitespace-normal break-words"> {item.name} </span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col text-white justify-center py-8">
                    <button className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all hover:bg-white/10">
                        <img src={""} className="w-6 h-6" />
                        <span>Profile</span>
                    </button>
                    <button className="flex items-center space-x-3 px-4 py-2 rounded-lg transition-all hover:bg-white/10">
                        <img src={""} className="w-6 h-6" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
