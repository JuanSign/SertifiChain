import { createFileRoute, useParams } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/$nib')({
  component: RouteComponent,
})

function RouteComponent() {
    const { nib } = useParams({ strict: false }) // Extracts the dynamic "id" parameter
    return (
        <div>
            <h1 className='text-white text-6xl mt-32'>Hello {nib}</h1>
        </div>
    );
};
