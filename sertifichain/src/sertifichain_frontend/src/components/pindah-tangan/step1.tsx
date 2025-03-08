import { Link } from "@tanstack/react-router";
import { Certificate, Sertifikat } from "../sertif";

const Step1 = ({ next, cert }: { next: () => void, cert: Certificate | null }) => {
    return (
        <div className="w-full">
            <Sertifikat certificate={cert} />
            <div className="flex flex-row ml-auto mt-8 text-center text-white text-lg w-1/4 space-x-2">
                <Link to="/dashboard/pindah-tangan" className="bg-[#FF7F00] w-1/2 rounded-md py-2">
                    <p>Batal</p>
                </Link>
                <button onClick={next} className="bg-gradient-to-b from-[#102552] to-[#1B3E88] w-1/2 rounded-md py-2">
                    <p>Lanjutkan</p>
                </button>
            </div>
        </div>
    );
};

export default Step1;