import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react';
import RiwayatKepemilikan from '../../components/riwayat_kepemilikan';
import Sertifikat from '../../components/sertif';

export const Route = createFileRoute('/home/cek-sertifikat')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ found, setFound ] = useState<Boolean>(false);

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
          />
          <button className="bg-blue-600 p-4 rounded-r-lg text-white" onClick={() => (setFound(true))}>
            <img src="/icon/search.png" className='w-6 h-6'/>
          </button>
        </div>
      </div>
      { found && <Info/>}
    </div>
  );
};

const Info = () => {
  const [ showDetail, setShowDetail ] = useState<Boolean>(true);

  return (
    <div className='pt-12 w-3/4'>
      <div className="mt-8 flex space-x-4 border-b border-gray-600">
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
      <div className='flex flex-col justify-center items-center'>
        { showDetail ? 
            <div className='w-11/12 mt-8'>
                <Sertifikat /> 
            </div>
        : 
            <RiwayatKepemilikan/>} 
      </div>
    </div>
  );
};