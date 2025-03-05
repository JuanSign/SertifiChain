import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => (
    <div className="font-poppins"> 
      <nav className="p-4 flex justify-between items-center bg-[#0F172A] text-white">
        <h1 className="text-2xl font-bold">Sertifichain</h1>
        <div className="flex space-x-8">
          <Link to="/feature" className="[&.active]:font-bold">Feature</Link>
          <Link to="/feature2" className="[&.active]:font-bold">Feature</Link>
          <Link to="/feature3" className="[&.active]:font-bold">Feature</Link>
        </div>
        <div className="flex space-x-4">
          <button>
            <img src="/notification.png" alt="Notification" className="w-6 h-6" />
          </button>
          <button>
            <img src="/account.png" alt="Account" className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <Outlet />

      <TanStackRouterDevtools />
    </div>
  ),
});
