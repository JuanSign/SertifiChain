import { useState } from "react";

const RiwayatKepemilikan = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <div className=' w-full mt-12 min-h-screen pr-24'>
        <div className="w-full h-full bg-white/10 rounded-lg pt-8 pb-8 px-10 border-1 border-white/50 flex flex-col items-center space-y-8">
        <ElemenRiwayat title="[28/02/2005] Penerbitan Sertifikat" text="Pemerintah Indonesia" secondary="Izhar Alif Akbar" setIsOpen={setIsOpen}/>
        <ElemenRiwayat title="[28/02/2005] Pindah Tangan Sertifikat" text="Izhar Alif Akbar" secondary="Rifki Virzaya" setIsOpen={setIsOpen}/>
        <ElemenRiwayat title="[28/02/2005] Pemecahan Sertifikat" text="Detail Informasi" setIsOpen={setIsOpen}/>

        </div>
        {isOpen && <PopUp setIsOpen={setIsOpen} />}
        </div>
    );
};

const ElemenRiwayat = ({ title, text, setIsOpen, secondary } : { title: string, text: string, setIsOpen: (x: boolean) => void, secondary?: string }) => {
    return (
        <div className="w-full text-white">
            <div className="flex flex-row items-center space-x-4">
                <img src="/icon/info.png" className="w-10 h-10"/>
                <div>
                <p className="text-white font-bold text-lg mb-1">{title}</p>
                <p className="text-white text-sm mb-1 flex items-center">
                    {text}
                    {secondary && <span className="mx-2">→</span>}
                    {secondary && <span>{secondary}</span>}
                </p>
                </div>
                <button className="ml-auto"onClick={() => {setIsOpen(true);}}>
                    <p className="text-[#6948ff] underline">
                        Detail Transaksi
                    </p>
                </button>
            </div>
            <hr className="w-full border-t border-gray-300 mt-2" />
        </div>
    );
};

const PopUp = ({ setIsOpen } : { setIsOpen: (x: boolean) => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/50 p-6 rounded-lg w-96 flex flex-col items-center text-white">
            <img src="/icon/exit.png" className="ml-auto w-4 h-4"/>
            <h2 className="text-lg font-bold mb-4">Detail Transaksi</h2>
            <p>This is a popup message!</p>
            <button 
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
            >
            Close
            </button>
        </div>
        </div>
    );
};

export default RiwayatKepemilikan