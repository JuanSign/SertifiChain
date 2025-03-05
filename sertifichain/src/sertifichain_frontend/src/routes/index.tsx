import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react';

// ✅ Declare the component first
const RouteComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/home" });
  }, [navigate]);

  return null; // Empty component, since it's only for redirecting
};

// ✅ Now use it in the route definition
export const Route = createFileRoute('/')({
  component: RouteComponent,
});
