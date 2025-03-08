import { useState } from "react";
import Wrapper from "../wrapper";
import { Link } from "@tanstack/react-router";

const Step3 = ({ prev, next } : { prev: () => void, next: () => void }) => {
    const [ showPopUp, setShowPopUp ] = useState<Boolean>(false);

    const onConfirm = () => {
        setShowPopUp(true);
    };

    const onClose = () => {
        setShowPopUp(false);
    }

    return(
        <div>
            { showPopUp && <ConfirmPopUp onClose={onClose} onSuccess={next}/>}
            <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/25 p-6 rounded-lg min-w-1/2 flex flex-col items-center text-white space-y-2 py-8">
                <h1 className="text-2xl font-bold text-white">Konfirmasi Transaksi</h1>
                <Wrapper text="NIB">
                    <p>XX - XX - XXXXXX</p>
                </Wrapper>
                <Wrapper text="Penerima">
                    <p>XX - XX - XXXXXX</p>
                </Wrapper>
                <Wrapper text="Identifier Penerima">
                    <p>XX - XX - XXXXXX</p>
                </Wrapper>
                <Wrapper text="Lokasi Tanah">
                    <p>XX - XX - XXXXXX</p>
                </Wrapper>
                <Wrapper text="Luas Tanah">
                    <p>XX - XX - XXXXXX</p>
                </Wrapper>
                <h1 className="mr-auto text-[#FF7F00] font-bold text-lg mt-4">Peringatan!</h1>
                <p className="mr-auto text-[#FF7F00] text-sm">Setelah dikonfirmasi, sertifikat ini tidak dapat dikembalikan kepada Anda.</p>
                <div className="flex flex-row mt-8 ml-auto text-center text-white space-x-2 w-1/2 text-sm">
                        <button onClick={prev} className="bg-[#FF7F00] w-1/2 rounded-md py-2">
                            <p>Batal</p>
                        </button>
                        <button onClick={onConfirm} className="bg-gradient-to-b from-[#102552] to-[#1B3E88] w-1/2 rounded-md py-2">
                            <p>Lanjutkan</p>
                        </button>
                </div>
            </div>
        </div>
    );
};

const ConfirmPopUp = ({ onClose, onSuccess } : { onClose: () => void, onSuccess: () => void }) => {
    return (
        <>
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/65 p-6 rounded-lg w-96 flex flex-col items-center text-white min-w-1/3 space-y-2">
            <button 
                className="ml-auto"
                onClick={() => onClose()}
                >
                <img src="/icon/exit.png" className=" w-4 h-4"/>
            </button>
            <div className="bg-[#E50000] rounded-full p-3">
                <img src="/icon/warning.png" className="m-auto w-8 h-8"/>
            </div>
            <p className="text-center px-16">Transaksi ini menyebabkan Anda kehilangan aset yang diproses</p>
            <div className="flex flex-row mt-8 mx-auto text-center text-white space-x-2 w-1/2 text-sm">
                <button onClick={onClose} className="bg-[#FF7F00] w-1/2 rounded-md py-2">
                    <p>Batal</p>
                </button>
                <Link to="/success" className="bg-[#E50000] w-1/2 rounded-md py-2">
                    <p>Lanjutkan</p>
                </Link>
            </div>
        </div>
        </div>
        </>
    );
};

export default Step3