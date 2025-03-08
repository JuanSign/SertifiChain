import { createFileRoute, Link } from '@tanstack/react-router'
import { replaceUnderscores } from '../../utils/string';
import { Certificate } from '../../components/sertif';
import { useEffect, useState } from 'react';
import { sertifichain_backend } from '../../../../declarations/sertifichain_backend';

export const Route = createFileRoute('/dashboard/pindah-tangan')({
  component: RouteComponent,
})

const headers = ["No", "NIB", "Location", "Issued At"];

function RouteComponent() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        console.log(await sertifichain_backend.get_my_principal());

        const certs = await sertifichain_backend.get_my_certificates();

        const formattedCerts: Certificate[] = certs.map((cert) => ({
          ...cert,
          iat: Number(cert.iat),
        }));

        setCertificates(formattedCerts);
      } catch (err) {
        console.error("Error fetching certificates:", err);
        setError("Failed to load certificates.");
      } finally {
        setLoading(false);
      }
    }

    fetchCertificates();
  }, []);

  if (loading) return <p className="text-white">Loading certificates...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-max">
      <div className='h-full py-16 flex flex-col'>
        <h1 className='text-white text-4xl font-bold'>Pindah Tangan Sertifikat</h1>

        <div className="overflow-x-auto mt-8 inline-block max-w-max rounded-t-2xl">
          <table className=" border-gray-300 table-auto text-white rounded-t-2xl">
            <thead className='bg-gradient-to-r from-[#183981] to-[#1B1741] rounded-t-2xl h-12'>
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-10 py-2 capitalize text-white">
                    {header}
                  </th>
                ))}
                <th className=" px-10 py-2 capitalize text-white">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={cert.nib}>
                  <td className="border px-8 py-2 text-center h-12">{index + 1}</td>
                  <td className="border px-8 py-2 text-center h-12">{cert.nib}</td>
                  <td className="border px-8 py-2 text-center h-12">
                    {cert.loc.c}, {cert.loc.p}
                  </td>
                  <td className="border px-8 py-2 text-center h-12">
                    {new Date(cert.iat * 1000).toLocaleDateString()}
                  </td>
                  <td className="border px-10 py-2 text-center">
                    <Link to="/pindah-tangan/$nib" className='flex justify-center items-center' params={{ nib: cert.nib }}>
                      <p className='bg-[linear-gradient(70deg,#1B3E88,#16326D,#102552)] px-10 py-1 text-sm rounded-md shadow shadow-gray-300'>Pilih</p>
                    </Link>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
