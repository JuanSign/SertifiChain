import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/home/autentikasi')({
  component: AuthPage,
});

function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0F1E] text-white font-poppins">
    <div className="relative w-[100%] max-w-[1000px] min-h-[750px] p-[2px] rounded-[50px] bg-gradient-to-bl from-white/10 via-transparent to-[#1E2432] 
                    border border-white/20 shadow-[0px_0px_50px_rgba(255,255,255,0.1)] backdrop-blur-xl overflow-hidden transition-transform duration-300">
    
        <div className="bg-gradient-to- from-[#1B3E88]/30 via-[#8D9EC3]/5 to-transparent p-10 rounded-lg text-center">
          
          {/* Logo */}
          <h1 className="mt-17 text-center text-[36px] font-semibold leading-tight">
          <span
            className="bg-gradient-to-r from-[#3355FF] to-[#69CFB5] bg-clip-text text-transparent"
            style={{ textShadow: "2px 2px 10px rgba(105, 207, 181, 0.8)" }}>
            Sertifichain
          </span>

          </h1>

          {/* Input Field */}
          <div className="mt-20 flex flex-col items-center w-full">
            <div className="w-full max-w-[400px]">
              <label className="text-[24px] font-bold text-left block">
                Enter Identity{' '}
                <span className="text-[16px] font-normal text-white/50">to continue</span>
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter Internet Identity"
              className="mt-6 w-full max-w-[400px] p-3 text-black rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <div className="w-full flex justify-center">
            <button className="mt-9 w-full max-w-[400px] relative py-3 rounded-lg bg-gradient-to-r from-[#102552] to-[#1B3E88] 
                      text-[16px] text-white font-medium shadow-md shadow-[#0D1D3D]/50 hover:scale-105 transition 
                      border border-gray-500/50 
                      before:absolute before:inset-0 before:rounded-lg before:border before:border-[#1B3D83]/50 
                      before:opacity-50 before:blur-md">
              Button
            </button>
          </div>

          {/* Alternative login */}
          <p className="underline text-center text-[16px] mt-9 cursor-pointer hover:underline">
            Continue with another device
          </p>

          {/* Footer Links */}
          <div className="mt-13 flex justify-between w-full max-w-[400px] mx-auto text-[16px] text-white/100 underline">
            <a href="#" className="hover:text-white hover:underline">
              Create New
            </a>
            <a href="#" className="hover:text-white hover:underline">
              Lost Access?
            </a>
          </div>

          {/* Powered by */}
          <div className="text-center mt-13 text-[14px] flex flex-col items-center pb-4">
            <span className="text-[#FF8000] font-semibold">Powered by:</span>
            <img src="/icp.png" alt="ICP Logo" className="h-6 mt-2" />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
