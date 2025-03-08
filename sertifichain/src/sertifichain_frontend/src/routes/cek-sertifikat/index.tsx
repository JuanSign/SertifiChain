import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as sertifichain_backend_idl, canisterId as sertifichain_backend_id } from '../../../../declarations/sertifichain_backend';
import RiwayatKepemilikan from '../../components/riwayat_kepemilikan';
import { Certificate, Sertifikat } from '../../components/sertif';

// Ensure the state is typed correctly
export const Route = createFileRoute('/cek-sertifikat/')({
    component: RouteComponent,
});

function RouteComponent() {
    const [found, setFound] = useState(false);
    const [nib, setNib] = useState('');
    const [certificate, setCertificate] = useState<Certificate | null>(null);

    // Initialize the backend canister actor
    const agent = new HttpAgent();

    // Allow fetching root key in local mode to bypass certificate verification
    if (process.env.DFX_NETWORK === "local") {
        agent.fetchRootKey().catch((err) => {
            console.error("Failed to fetch root key:", err);
        });
    }

    const backendActor = Actor.createActor(sertifichain_backend_idl, {
        agent,
        canisterId: sertifichain_backend_id
    });

    const searchCertificate = async () => {
        try {
            const cert = await backendActor.get_certificate(nib);
            console.log("Raw API response:", cert);

            if (Array.isArray(cert) && cert.length > 0) {
                console.log("Parsed Certificate:", cert[0]); // Extract first element
                setCertificate(cert[0] as Certificate);
                setFound(true);
            } else {
                console.warn("Sertifikat tidak ditemukan.");
                alert('Sertifikat tidak ditemukan.');
                setFound(false);
                setCertificate(null);
            }
        } catch (error) {
            console.error('Error fetching certificate:', error);
            alert('Gagal mengambil sertifikat. Periksa koneksi atau coba lagi.');
            setFound(false);
            setCertificate(null);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
            <h1 className="text-2xl font-semibold mb-4 mt-64">Cek Sertifikat</h1>
            <div className="w-2/3">
                <label className="block text-lg mb-2">NIB</label>
                <div className="relative w-full flex flex-row">
                    <input
                        type="text"
                        placeholder="Masukkan NIB"
                        className="bg-white w-full p-4 pr-12 text-black rounded-l-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={nib}
                        onChange={(e) => setNib(e.target.value)}
                    />
                    <button className="bg-blue-600 p-4 rounded-r-lg text-white" onClick={searchCertificate}>
                        <img src="/icon/search.png" className='w-6 h-6' />
                    </button>
                </div>
            </div>
            {found && <Info certificate={certificate} />}
        </div>
    );
};

const Info: React.FC<{ certificate: Certificate | null }> = ({ certificate }) => {
    const [showDetail, setShowDetail] = useState(true);

    if (!certificate) {
        return null;
    }

    return (
        <div className='pt-12 w-3/4'>
            <div className="mt-8 flex space-x-4 border-b border-gray-600">
                <button
                    className={`pb-2 text-white text-xl font-bold w-1/2 ${showDetail ? 'border-b-2 border-white' : ''}`}
                    onClick={() => setShowDetail(true)}
                >
                    Detail Informasi
                </button>
                <button
                    className={`pb-2 text-white text-xl font-bold w-1/2 ${!showDetail ? 'border-b-2 border-white' : ''}`}
                    onClick={() => setShowDetail(false)}
                >
                    Riwayat Kepemilikan
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                {showDetail ? (
                    <div className='w-11/12 mt-8'>
                        <Sertifikat certificate={certificate} />
                    </div>
                ) : (
                    <RiwayatKepemilikan />
                )}
            </div>
        </div>
    );
};

export default RouteComponent;