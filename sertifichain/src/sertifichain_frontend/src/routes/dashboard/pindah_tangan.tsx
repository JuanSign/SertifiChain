import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/pindah_tangan')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='h-full py-16  us'>
      <h1 className='text-white text-4xl font-bold'>Pindah Tangan Sertifikat</h1>
    </div>
  );
}
