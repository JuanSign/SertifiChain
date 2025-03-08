import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/ceksertif")({
  component: CheckCertifPage,
});

interface CertificateData {
  number: string;
  owner: string;
  rights: string;
  landSize: string;
  status: string;
  history: { event: string; details: string; date: string; time: string }[];
}

function CheckCertifPage() {
  const [certificateData, setCertificateData] = useState<CertificateData | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [activeTab, setActiveTab] = useState("detail");

  const handleSearch = () => {
    if (inputValue) {
      setCertificateData({
        number: "XXXXXXX",
        owner: "XXXXXXX",
        rights: "XXXXXXX",
        landSize: "XXXXXXX",
        status: "XXXXXXX",
        history: [
          { event: "Penerbitan Sertifikat", details: "Pemerintah Indonesia", date: "28 Februari", time: "08.25 WIB" },
          { event: "Pindah Tangan Sertifikat", details: "Rifki Virya -> Juan Siagian", date: "28 Februari", time: "08.25 WIB" },
          { event: "Pindah Tangan Sertifikat", details: "Juan Siagian -> Nasywaa, Adli", date: "28 Februari", time: "08.25 WIB" },
          { event: "Pindah Tangan Sertifikat", details: "Juan Siagian -> Nasywaa, Adli", date: "28 Februari", time: "08.25 WIB" },
        ],
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0F1E] text-white font-poppins">
      <main className="flex flex-col items-center justify-center flex-grow mt-[-100px]">
        <h2 className="text-[40px] font-bold">Cek Sertifikat</h2>

        {/* Input Search */}
        <div className="mt-10 flex w-[1000px] bg-white rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Masukkan ID Sertifikat"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-8 py-5 text-black focus:outline-none"
          />
          <button onClick={handleSearch} className="bg-blue-600 px-5 flex items-center justify-center">
            <img src="/search.png" alt="Search" className="w-6 h-6" />
          </button>
        </div>

        {/* Certificate Details */}
        {certificateData && (
          <div className="mt-10 w-[1000px] rounded-xl border border-white/50 
                shadow-[0px_0px_30px_5px_rgba(255,255,255,0.2)] 
                backdrop-blur-md bg-white/10 p-13">

            <button
              className={`relative w-1/2 text-center border-b-4 border-transparent text-[24px] font-bold pb-2 
                before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[4px] before:bg-white
                ${activeTab === "detail" 
                  ? "text-white border-b-2 border-transparent after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[4px] after:bg-gradient-to-r after:from-[#3355FF] after:to-[#1F3399] after:shadow-[0px_4px_10px_rgba(51,85,255,0.5)] before:hidden" 
                  : "text-white-400"}`}
              onClick={() => setActiveTab("detail")}
            >
              Detail Informasi
            </button>

            <button
              className={`relative w-1/2 text-center border-b-4 border-transparent text-[24px] font-bold pb-2 
                before:absolute before:left-0 before:bottom-[-2px] before:w-full before:h-[4px] before:bg-white
                ${activeTab === "history" 
                  ? "text-white border-b-2 border-transparent after:absolute after:left-0 after:bottom-[-2px] after:w-full after:h-[4px] after:bg-gradient-to-r after:from-[#3355FF] after:to-[#1F3399] after:shadow-[0px_4px_10px_rgba(51,85,255,0.5)] before:hidden" 
                  : "text-white-400"}`}
              onClick={() => setActiveTab("history")}
            >
              Histori Kepemilikan
            </button>

            {activeTab === "detail" ? (
              <div className="mt-12 text-left text-white-300 space-y-8">
                {[
                  { label: "Nomor Sertifikat", value: certificateData.number },
                  { label: "Nama Pemilik", value: certificateData.owner },
                  { label: "Hak Pemilik", value: certificateData.rights },
                  { label: "Luas Tanah", value: certificateData.landSize },
                  { label: "Status Tanah", value: certificateData.status },
                ].map((item, index, array) => (
                  <div key={index}>
                    <div className="mb-1">
                      <strong>{item.label}:</strong>
                    </div>
                    <div className="text-white-400">{item.value}</div>
                    {index !== array.length - 1 && <div className="border-b border-white-600 mt-1"></div>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-10 text-left text-white-300 space-y-6">
                {certificateData.history.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white-600 pb-4">
                    <div className="flex items-center gap-4">
                      <img src="/important.png" alt="Important Icon" className="w-13 h-13" />
                      <div>
                        <strong>{item.event}</strong>
                        <div className="text-white-400">{item.details}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <strong>{item.date}</strong>
                      <div className="text-white-400">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="w-full mt-auto py-6 text-center border-t border-white/10">
        <p className="text-sm text-gray-400">2025 © Sertifichain. All Right Reserved</p>
      </footer>
    </div>
  );
}

export default CheckCertifPage;