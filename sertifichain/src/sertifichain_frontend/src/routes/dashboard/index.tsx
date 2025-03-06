import { createFileRoute, Link } from '@tanstack/react-router'
import { replaceUnderscores } from '../../utils/string';

export const Route = createFileRoute('/dashboard/')({
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
    <div className="max-w-max mx-auto">
      <div className='h-full py-16 flex flex-col'>
        <h1 className='text-white text-4xl font-bold'>Daftar Kepemilikan</h1>

        <div className="overflow-x-auto mt-8 inline-block max-w-max">
          <table className="border border-gray-300 table-auto text-white">
            <thead className='bg-gradient-to-r from-[#183981] to-[#1B1741]'>
              <tr>
                {headers.map((header) => (
                  <th key={header} className="border px-4 py-2 capitalize text-white">
                    {replaceUnderscores(header)}
                  </th>
                ))}
                <th className="border px-4 py-2 capitalize text-white">Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, idx) => (
                    <td key={idx} className="border px-4 py-2 text-center">{value}</td>
                  ))}
                  <td className="border px-4 py-2 text-center">
                    <Link to="/dashboard/$nib" params={{ nib: data.at(index)?.nib as string }} className='flex justify-center items-center'>
                      <img src="/icon/detail.png" className='h-6 w-6'/>
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
