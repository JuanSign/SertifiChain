import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Layout from '../components/layout';
import { RouteProvider } from '../context/globalContext';

export const Route = createRootRoute({
  component: () => (
    <div className="font-poppins"> 
      <RouteProvider>
        <Layout>
          <Outlet />
        </Layout>
      </RouteProvider>
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
});
