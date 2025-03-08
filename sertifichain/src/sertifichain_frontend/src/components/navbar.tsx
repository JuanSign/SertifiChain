import { AuthClient } from "@dfinity/auth-client";
import { useEffect, useState } from "react";
import { sertifichain_backend } from "../../../declarations/sertifichain_backend";
import { Actor } from "@dfinity/agent";

const NavBar = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash || "#about");
    const [authClient, setAuthClient] = useState<AuthClient | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [principal, setPrincipal] = useState("");

    /**
     * Get the correct Internet Identity URL based on the current environment
    */
    const identityProvider = () => {
        console.log(import.meta.env.DFX_NETWORK);
        console.log(import.meta.env.CANISTER_ID_INTERNET_IDENTITY);
        if (import.meta.env.VITE_DFX_NETWORK === "local") {
        return `http://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.localhost:4943`;
        } else if (import.meta.env.VITE_DFX_NETWORK === "ic") {
        return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.ic0.app`;
        } else {
        return `https://${import.meta.env.VITE_CANISTER_ID_INTERNET_IDENTITY}.dfinity.network`;
        }
    };

    /**
     * Replace backend actor identity with the identity from AuthClient
     */
    const onIdentityUpdate = async (client: AuthClient) => {
        if (!client) return;

        const identity = client.getIdentity();
        const agent = Actor.agentOf(sertifichain_backend);

        if (agent) {
            agent.replaceIdentity?.(identity);
        }

        setIsAuthenticated(await client.isAuthenticated());
        setPrincipal(identity.getPrincipal().toText());
    };

    /**
     * Create AuthClient and load session if available
     */
    const createAuthClient = async () => {
        const client = await AuthClient.create();
        setAuthClient(client);
        await onIdentityUpdate(client);
    };

    /**
     * Login with AuthClient
     */
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
    };

    /**
     * Logout with AuthClient
     */
    const handleLogout = async () => {
        if (authClient) {
        await authClient.logout();
        setIsAuthenticated(false);
        setPrincipal("");
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
            {isAuthenticated ? (
            <div className="flex-1 flex justify-end space-x-4">
                <button>
                    <img src="/notification.png" alt="Notification" className="w-6 h-6" />
                </button>
                <a href="/dashboard">
                    <img src="/account.png" alt="Account" className="w-6 h-6" />
                </a>
            </div>
            ) : (
                <button onClick={handleLogin}>
                    <img src="/connect.svg" alt="" />
                    <div>Connect</div>
                </button>
            )}
        </nav>
    );
};

export default NavBar;