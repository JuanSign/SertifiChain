import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react';

const RouteComponent = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/home" });
  }, [navigate]);

  return null;
};

export const Route = createFileRoute('/')({
  component: RouteComponent,
});
