import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/feature')({
  component: FeaturePage,
});

function FeaturePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0F172A] to-[#0A0F1E] text-white font-poppins">
      <h1 className="text-5xl font-bold">Feature 1</h1>
      <p className="text-gray-300 mt-4 max-w-2xl text-center">
        Ini adalah halaman feature pertama.
      </p>
    </div>
  );
}

export default FeaturePage;
