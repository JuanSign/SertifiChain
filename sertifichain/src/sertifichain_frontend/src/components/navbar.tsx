
import { AuthClient } from "@dfinity/auth-client";
import { useEffect, useState, useRef } from "react";
import { sertifichain_backend } from "../../../declarations/sertifichain_backend";
import { Actor } from "@dfinity/agent";
import { Link } from "@tanstack/react-router";
import { useRouteContext } from "../context/globalContext";

const NavBar = () => {
    const { firstRoute } = useRouteContext();

    const [activeHash, setActiveHash] = useState(window.location.hash || "#about");
    const [authClient, setAuthClient] = useState<AuthClient | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [principal, setPrincipal] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    const [showNotification, setShowNotification] = useState<Boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const notifRef = useRef<HTMLDivElement>(null);


    const identityProvider = () => {
        if (import.meta.env.VITE_DFX_NETWORK === "local") {
            return `http://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`;
        } else if (import.meta.env.VITE_DFX_NETWORK === "ic") {
            return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.ic0.app`;
        } else {
            return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.dfinity.network`;
        }
    };

    const onIdentityUpdate = async (client: AuthClient) => {
        if (!client) return;

        const identity = client.getIdentity();
        const agent = Actor.agentOf(sertifichain_backend);

        if (agent) {
            agent.replaceIdentity?.(identity);
        }

        setIsAuthenticated(await client.isAuthenticated());
        setPrincipal(identity.getPrincipal().toText());
        setShowMenu(false);
        setShowNotification(false);
    };

    const createAuthClient = async () => {
        const client = await AuthClient.create();
        setAuthClient(client);
        await onIdentityUpdate(client);
    };

    const handleLogin = async () => {
        if (!authClient) return;

        await new Promise<void>((resolve, reject) =>
            authClient.login({
                identityProvider: identityProvider(),
                onSuccess: resolve,
                onError: reject,
            })
        );

        await onIdentityUpdate(authClient);
        setShowMenu(false); // Ensure menu is closed after login
        setShowNotification(false);
    };

    const handleLogout = async () => {
        if (authClient) {
            await authClient.logout();
            setIsAuthenticated(false);
            setPrincipal("");
            setShowMenu(false); // Close menu after logout
            setShowNotification(false);
        }
    };

    useEffect(() => {
        createAuthClient();
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowMenu(false);
            }
        };

        if (showMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showMenu]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
                setShowNotification(false);
            }
        };

        if (showNotification) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNotification]);

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

            {firstRoute === "home" ? (
                <div className="flex space-x-8 absolute left-1/2 transform -translate-x-1/2 z-10">
                    {["about", "tech", "feature", "FAQ"].map((item) => {
                        const itemHash = `#${item}`;
                        return (
                            <Link
                                to="/home"
                                key={item}
                                href={itemHash}
                                onClick={(e) => handleScroll(e, item)}
                                className={`relative transition-all duration-300 ${isActive(item) ? "text-blue-500 font-bold after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[3px] after:bg-blue-500 after:rounded-full" : "text-white"
                                    }`}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        );
                    })}
                </div>
            ) : null}

            {isAuthenticated ? (
                <div className="flex-1 flex justify-end space-x-4 relative items-center">
                    <Link
                        to="/cek-sertifikat"
                        className="relative transition-all duration-300 py-1 px-2 rounded-md border-1 border-white text-white
                        hover:before:scale-100 hover:scale-105"
                    >
                        Cek Sertifikat
                    </Link>
                    {/* Notification Icon */}
                    <div className="relative" ref={notifRef}>
                        <button onClick={() => setShowNotification((prev) => (!prev))}>
                            <img src="/notification.png" alt="Notification" className="w-6 h-6" />
                        </button>
                        {showNotification && (
                            <div className="absolute top-full right-0 bg-[#102552] shadow-lg rounded-md w-40 border border-gray-200 px-2 py-4">
                                <p className="text-white text-center">No new notifications</p>
                            </div>
                        )}
                    </div>


                    {/* Account Button & Popup */}
                    <div className="relative" ref={menuRef}>
                        <button onClick={() => setShowMenu(!showMenu)}>
                            <img src="/account.png" alt="Account" className="w-8 h-8" />
                        </button>

                        {showMenu && (
                            <div className="absolute top-full right-0 bg-[#102552] shadow-lg rounded-md py-2 w-40 border border-gray-200">
                                {/* Dashboard Option */}
                                <a
                                    href="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 text-white hover:bg-[#282e3b]"
                                    onClick={() => setShowMenu(false)} // Close popup on click
                                >
                                    <img src="/icon/dashboard_navbar.svg" alt="Dashboard" className="w-5 h-5" />
                                    Dashboard
                                </a>

                                {/* Logout Option */}
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-400 hover:bg-[#282e3b]"
                                >
                                    <img src="/icon/logout_navbar.svg" alt="Logout" className="w-5 h-5" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <button onClick={handleLogin} className="flex items-center space-x-2">
                    <img src="/icon/connect.svg" alt="Connect" />
                </button>
            )}
        </nav>
    );
};

export default NavBar;
