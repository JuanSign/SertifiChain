import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import Layout from '../components/layout';

export const Route = createRootRoute({
  component: () => (
    <div className="font-poppins"> 
      <Layout>
        <Outlet />
      </Layout>
      <TanStackRouterDevtools />
    </div>
  ),
});
