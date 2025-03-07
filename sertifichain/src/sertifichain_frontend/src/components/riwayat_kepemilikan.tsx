import { useState } from "react";
import PopUpDetail from "./popup_detail";
import Divider from "./divider";

const RiwayatKepemilikan = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <div className=' w-full mt-12 min-h-screen pr-24'>
        <div className="w-full h-full bg-white/10 rounded-lg pt-8 pb-8 px-10 border-1 border-white/50 flex flex-col items-center space-y-8">
        <ElemenRiwayat title="[28/02/2005] Penerbitan Sertifikat" text="Pemerintah Indonesia" secondary="Izhar Alif Akbar" setIsOpen={setIsOpen}/>
        <ElemenRiwayat title="[28/02/2005] Pindah Tangan Sertifikat" text="Izhar Alif Akbar" secondary="Rifki Virzaya" setIsOpen={setIsOpen}/>
        <ElemenRiwayat title="[28/02/2005] Pemecahan Sertifikat" text="Detail Informasi" setIsOpen={setIsOpen}/>

        </div>
        {isOpen && <PopUpDetail onClose={onClose} />}
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
            <Divider/>
        </div>
    );
};

export default RiwayatKepemilikan