import { ReactNode } from "@tanstack/react-router";

const Sertifikat = () => {
    return (
        <div className=' w-full mt-12 min-h-screen pr-24'>
        <div className="w-full h-full bg-white/10 rounded-lg pt-8 pb-16 px-10 border-1 border-white/50 flex flex-col items-center space-y-8">
            <img src="/icon/kop.png"/>
            <Wrapper text="NIB">
                <p>XX - XX - XXXXXXX</p>
            </Wrapper>
            <Wrapper text="Tanggal Penerbitan">
                <p>4 Maret 2025</p>
            </Wrapper>
            <Wrapper text="Nama Pemilik">
                <p>Idzhar Alif Akbar</p>
            </Wrapper>
            <Wrapper text="Letak Bidang Tanah">
                <ul className="list-disc pl-5 w-1/3">
                <li className="grid grid-cols-2 gap-4">
                    <span>Provinsi</span>
                    <span>: Jawa Barat</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Kota</span>
                    <span>: Bandung</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Kecamatan</span>
                    <span>: Buah Batu</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Kelurahan</span>
                    <span>: Cibiru Hilir</span>
                </li>
                </ul>
            </Wrapper>
            <Wrapper text="Peta Lokasi">
                <img src="/icon/placeholder_map.png"/>
            </Wrapper>
            <Wrapper text="Detail Batas Tanah">
            <ul className="list-disc pl-5 w-1/3">
                <li className="grid grid-cols-2 gap-4">
                    <span>Batas Utara</span>
                    <span>: XXXXXXX</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Batas Timur</span>
                    <span>: XXXXXXX</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Batas Selatan</span>
                    <span>: XXXXXXX</span>
                </li>
                <li className="grid grid-cols-2 gap-4">
                    <span>Batas Barat</span>
                    <span>: XXXXXXX</span>
                </li>
                </ul>
            </Wrapper>
        </div>
        </div>
    );
};

const Wrapper = ({children, text} : {children: ReactNode, text: string}) => {
    return (
        <div className="w-full text-white">
            <p className="text-white text-bold text-lg mb-1">{text}</p>
            {children}
            <hr className="w-full border-t border-gray-300 mt-2" />
        </div>
    );
};

export default Sertifikat;