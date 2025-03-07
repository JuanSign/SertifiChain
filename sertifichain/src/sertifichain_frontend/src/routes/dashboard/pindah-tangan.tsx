import { createFileRoute, Link } from '@tanstack/react-router'
import { replaceUnderscores } from '../../utils/string';

export const Route = createFileRoute('/dashboard/pindah-tangan')({
  component: RouteComponent,
})

interface Record {
  no: number,
  nib: string,
  lokasi: string,
  luas_tanah: string,
  jenis_hak: string,
}

const headers: (keyof Record)[] = ["no", "nib", "lokasi", "luas_tanah", "jenis_hak"];

const data: Record[] = [
  { no: 1, nib: "12345", lokasi: "Jakarta", luas_tanah: "200m²", jenis_hak: "SHM" },
  { no: 2, nib: "67890", lokasi: "Bandung", luas_tanah: "150m²", jenis_hak: "HGB" },
];

const page: number = 1;

function RouteComponent() {
  return (
    <div className="max-w-max">
      <div className='h-full py-16 flex flex-col'>
        <h1 className='text-white text-4xl font-bold'>Pindah Tangan Sertifikat</h1>

        <div className="overflow-x-auto mt-8 inline-block max-w-max rounded-t-2xl">
          <table className=" border-gray-300 table-auto text-white rounded-t-2xl">
            <thead className='bg-gradient-to-r from-[#183981] to-[#1B1741] rounded-t-2xl h-12'>
              <tr>
                {headers.map((header, index) => (
                  <th key={header} className=" px-10 py-2 capitalize text-white">
                    {header === 'nib' ? "NIB" : replaceUnderscores(header)}
                  </th>
                ))}
                <th className=" px-10 py-2 capitalize text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-8 py-2 text-center">{value}</td>
                  ))}
                  <td className="border px-10 py-2 text-center h-12">
                    <Link to="/pindah-tangan" className='flex justify-center items-center'>
                      <p className='bg-[linear-gradient(70deg,#1B3E88,#16326D,#102552)] px-10 py-1 text-sm rounded-md shadow shadow-gray-300'>Pilih</p>
                    </Link>
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
}
