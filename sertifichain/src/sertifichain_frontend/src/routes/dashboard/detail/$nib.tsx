import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import Sertifikat from '../../../components/sertif';
import { useState } from 'react';
import RiwayatKepemilikan from '../../../components/riwayat_kepemilikan';

export const Route = createFileRoute('/dashboard/detail/$nib')({
  component: RouteComponent,
})

function RouteComponent() {
    const [ showDetail, setShowDetail ] = useState<boolean>(true);
    const { nib } = useParams({ strict: false })

    return (
        <div className='pt-12'>
            <Link className="flex items-center space-x-2" to="/dashboard">
                <img src="/icon/back_arrow.png" className='w-2'/>
                <span className="text-md text-white underline">Daftar Kepemilikan</span>
            </Link>

            <div className="mt-8 flex space-x-4 border-b border-gray-600 w-9/10">
                <button
                className={`pb-2 text-white text-xl font-bold w-1/2 ${
                    showDetail ? 'border-b-2 border-white' : ''
                }`}
                onClick={() => setShowDetail(true)}
                >
                Detail Informasi
                </button>
                <button
                className={`pb-2 text-white text-xl font-bold w-1/2 ${
                    !showDetail ? 'border-b-2 border-white' : ''
                }`}
                onClick={() => setShowDetail(false)}
                >
                Riwayat Kepemilikan
                </button>
            </div>
            
            { showDetail ? 
                <div className='w-11/12 mt-8'>
                    <Sertifikat /> 
                </div>
            : 
                <RiwayatKepemilikan/>} 
        </div>
    );
};
