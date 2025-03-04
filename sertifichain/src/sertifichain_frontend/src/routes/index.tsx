import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="bg-primary text-primary-foreground p-md rounded-md shadow-md">
      <h3>Welcome Home!</h3>
    </div>
  )
}