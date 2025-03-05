import { Link } from "@tanstack/react-router";
import { useGlobalContext } from "../context/globalContext";

const NavBar = () => {
    const { loggedIn, setLoggedIn } = useGlobalContext();

    const onClickProfile = () => {
        setLoggedIn(true);
    }

    return (
        <nav className="p-4 flex justify-between items-center text-white">
            <Link to="/">
                <h1 className="text-2xl font-bold">Sertifichain</h1>
            </Link>
            <div className="flex space-x-8">    
                <Link to="/feature" className="[&.active]:font-bold">Feature</Link>
                <Link to="/feature2" className="[&.active]:font-bold">Feature</Link>
                <Link to="/feature3" className="[&.active]:font-bold">Feature</Link>
            </div>
            <div className="flex space-x-4">
                <button>
                    <img src="/notification.png" alt="Notification" className="w-6 h-6" />
                </button>
                <button onClick={onClickProfile}>
                    <img src="/account.png" alt="Account" className="w-6 h-6" />
                </button>
            </div>
        </nav>
    );
};

export default NavBar;