import { useEffect, useState } from "react";

const NavBar = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash || "#about");

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                window.location.hash = targetId;
            }, 300);
        }
    };

    const isActive = (hash: string) => activeHash === `#${hash}`;

    return (
        <nav className="p-4 flex justify-between items-center fixed top-0 left-0 w-full bg-white/5 backdrop-blur-lg z-50">
            <div className="flex-1">
                <a href="/home" className="text-2xl font-bold text-white">Sertifichain</a>
            </div>

            <div className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                {["about", "tech", "feature", "FAQ"].map((item) => {
                    const itemHash = `#${item}`;
                    return (
                        <a
                            key={item}
                            href={itemHash}
                            onClick={(e) => handleScroll(e, item)}
                            className={`relative transition-all duration-300 ${isActive(item) ? "text-blue-500 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-blue-500 after:rounded-full" : "text-white"
                                }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    );
                })}
            </div>

            <div className="flex-1 flex justify-end space-x-4">
                <button>
                    <img src="/notification.png" alt="Notification" className="w-6 h-6" />
                </button>
                <a href="/dashboard">
                    <img src="/account.png" alt="Account" className="w-6 h-6" />
                </a>
            </div>
        </nav>
    );
};

export default NavBar;