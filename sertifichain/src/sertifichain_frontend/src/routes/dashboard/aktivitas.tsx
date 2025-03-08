import { createFileRoute } from '@tanstack/react-router'
import { replaceUnderscores } from '../../utils/string';
import { useState } from 'react';
import PopUpDetail from '../../components/popup_detail';

export const Route = createFileRoute('/dashboard/aktivitas')({
  component: RouteComponent,
})

interface Record {
  jenis_aktivitas: string,
  pengirim: string,
  penerima: string,
  id_transaksi: string,
  waktu_transaksi: string,
}

const headers: (keyof Record)[] = ["jenis_aktivitas", "pengirim", "penerima", "id_transaksi", "waktu_transaksi"];

const data: Record[] = [
  { jenis_aktivitas: "Penerbitan", pengirim: "Alice", penerima: "Bob", id_transaksi: "TX12345", waktu_transaksi: "2025-03-06 10:00:00" },
  { jenis_aktivitas: "Pecah Sertifikat", pengirim: "Charlie", penerima: "Bank", id_transaksi: "TX67890", waktu_transaksi: "2025-03-06 12:30:00" },
  { jenis_aktivitas: "Pindah Tangan", pengirim: "Charlie", penerima: "Bank", id_transaksi: "TX67890", waktu_transaksi: "2025-03-06 12:30:00" },
];


const page: number = 1;

function RouteComponent() {
  const [ showPopup, setShowPopup ] = useState<boolean>(false);

  const onClose = () => {
    setShowPopup(false);
  }
  
  return (
    <div className="max-w-max">
      { showPopup && <PopUpDetail onClose={onClose}/>}
      <div className='h-full py-16 flex flex-col'>
        <h1 className='text-white text-4xl font-bold'>Aktivitas</h1>

        <div className="overflow-x-auto mt-8 inline-block max-w-max rounded-t-2xl">
          <table className=" border-gray-300 table-auto text-white rounded-t-2xl">
            <thead className='bg-gradient-to-r from-[#183981] to-[#1B1741] rounded-t-2xl h-12'>
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className="px-10 py-2 capitalize text-white">
                    {header === 'id_transaksi' ? "ID Transaksi" : replaceUnderscores(header)}
                  </th>
                ))}
                <th className="px-10 py-2 capitalize text-white">Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-8 py-2 text-center h-12">{value}</td>
                  ))}
                  <td className="border px-10 py-2 text-center">
                    <button onClick={() => setShowPopup(true)}>
                      <img src="/icon/detail.png" className='h-5 w-5'/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex flex-row self-end mt-4 space-x-1'>
          <button>
            <img src='/icon/table_back.png' className='w-8 h-8'/>
          </button>
          <div className='bg-gradient-to-b from-[#16326D] to-[#2B61D3] w-8 h-8 rounded-md flex justify-center items-center'>
              <p className='text-gray-200 text-center text-lg font-bold'>{page}</p>
          </div>
          <button>
            <img src='/icon/table_back.png' className='w-8 h-8 scale-x-[-1]'/>
          </button>
        </div>
      </div>
    </div>
  );
};
