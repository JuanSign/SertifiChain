import { Link } from "@tanstack/react-router";

const NavBar = () => {
    return (
        <nav className="p-4 flex justify-between items-center text-white">
            <Link to="/home">
                <h1 className="text-2xl font-bold">Sertifichain</h1>
            </Link>
            <div className="flex space-x-8">    
                <Link to="/home/feature" className="[&.active]:font-bold">Feature</Link>
                <Link to="/home/feature2" className="[&.active]:font-bold">Feature</Link>
                <Link to="/home/feature3" className="[&.active]:font-bold">Feature</Link>
            </div>
            <div className="flex space-x-4">
                <button>
                    <img src="/notification.png" alt="Notification" className="w-6 h-6" />
                </button>
                <Link to="/dashboard">
                    <img src="/account.png" alt="Account" className="w-6 h-6" />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;