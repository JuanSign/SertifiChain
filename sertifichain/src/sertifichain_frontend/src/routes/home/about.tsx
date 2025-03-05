import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home/about')({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#0A0F1E] text-white font-poppins">
      
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight">
          Lorem ipsum dolor sit amet <br />
          <span className="text-blue-500">Sertifichain</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Faucibus arcu hendrerit massa in. 
          Urna nunc sed tellus quam turpis.
        </p>
        <button className="mt-6 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition">
          Let’s Get Started
        </button>
      </section>

      {/* nanti ganti gambar"nya */}
      <section className="flex justify-center items-center relative mt-16">
        <div className="absolute w-[80%] h-1 border-t border-gray-500"></div>
        <div className="flex justify-between w-[80%] max-w-4xl">
          <div className="relative">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              coba
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-10 bg-gray-500"></div>
          </div>
          <div className="relative">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              coba
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-10 bg-gray-500"></div>
          </div>
          <div className="relative">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              coba
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-10 bg-gray-500"></div>
          </div>
          <div className="relative">
            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-lg">
              coba
            </div>
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-10 bg-gray-500"></div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default LandingPage;
