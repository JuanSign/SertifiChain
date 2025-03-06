import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/aktivitas')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-full py-16  us'>
      <h1 className='text-white text-4xl font-bold'>Aktivitas</h1>
    </div>
  );
};
