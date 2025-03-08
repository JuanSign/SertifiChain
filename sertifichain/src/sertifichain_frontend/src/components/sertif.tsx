import Wrapper from "./wrapper";

export interface Certificate {
    nib: string;
    iat: number;
    own: string;
    loc: {
        p: string; // Provinsi
        c: string; // Kota
        d: string; // Kecamatan
        v: string; // Kelurahan
    };
    det: {
        n: number;
        e: number;
        s: number;
        w: number;
    };
}

interface SertifikatProps {
    certificate: Certificate | null;
}

export const Sertifikat: React.FC<SertifikatProps> = ({ certificate }) => {
    if (!certificate) {
        return (
            <div className="w-full h-full bg-white/10 rounded-lg pt-8 pb-16 px-10 border-1 border-white/50 flex flex-col items-center space-y-8 shadow-centered shadow-white/50 mb-12">
                <p className="text-white text-lg">Sertifikat tidak ditemukan.</p>
            </div>
        );
    }

    return (
        <div className="w-full h-full bg-white/10 rounded-lg pt-8 pb-16 px-10 border-1 border-white/50 flex flex-col items-center space-y-8 shadow-centered shadow-white/50 mb-12">
            <img src="/icon/kop.png" alt="Kop Sertifikat" />

            <Wrapper text="NIB">
                <p>{certificate.nib}</p>
            </Wrapper>

            <Wrapper text="Tanggal Penerbitan">
                <p>
                    {certificate.iat ? new Date(Number(certificate.iat) * 1000).toLocaleDateString() : "N/A"}
                </p>
            </Wrapper>

            <Wrapper text="Nama Pemilik">
                <p>{certificate.own}</p>
            </Wrapper>

            <Wrapper text="Letak Bidang Tanah">
                <ul className="list-disc pl-5 w-1/3">
                    <li className="grid grid-cols-2 gap-4">
                        <span>Provinsi</span>
                        <span>: {certificate.loc.p}</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Kota</span>
                        <span>: {certificate.loc.c}</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Kecamatan</span>
                        <span>: {certificate.loc.d}</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Kelurahan</span>
                        <span>: {certificate.loc.v}</span>
                    </li>
                </ul>
            </Wrapper>

            <Wrapper text="Peta Lokasi">
                <img src="/icon/placeholder_map.png" alt="Peta Lokasi" />
            </Wrapper>

            <Wrapper text="Detail Batas Tanah">
                <ul className="list-disc pl-5 w-1/3">
                    <li className="grid grid-cols-2 gap-4">
                        <span>Batas Utara</span>
                        <span>: {certificate.det.n}°</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Batas Timur</span>
                        <span>: {certificate.det.e}°</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Batas Selatan</span>
                        <span>: {certificate.det.s}°</span>
                    </li>
                    <li className="grid grid-cols-2 gap-4">
                        <span>Batas Barat</span>
                        <span>: {certificate.det.w}°</span>
                    </li>
                </ul>
            </Wrapper>
        </div>
    );
};