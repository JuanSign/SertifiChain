import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { replaceUnderscores } from "../../utils/string";
import { sertifichain_backend } from "../../../../declarations/sertifichain_backend";
import { Principal } from "@dfinity/principal"; // Import Principal

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

interface Certificate {
  nib: string;
  iat: number;
  own: string;
  loc: {
    p: string;
    c: string;
    d: string;
    v: string;
  };
  det: {
    n: number;
    e: number;
    s: number;
    w: number;
  };
}

const headers: (keyof Certificate)[] = ["nib", "iat", "own", "loc", "det"];

function RouteComponent() {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        console.log(await sertifichain_backend.get_my_principal());

        const certs = await sertifichain_backend.get_my_certificates();

        const formattedCerts: Certificate[] = certs.map(cert => ({
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
      <div className="h-full py-16 flex flex-col">
        <h1 className="text-white text-4xl font-bold">Daftar Kepemilikan</h1>

        <div className="overflow-x-auto mt-8 inline-block max-w-max rounded-t-2xl">
          <table className="border-gray-300 table-auto text-white rounded-t-2xl">
            <thead className="bg-gradient-to-r from-[#183981] to-[#1B1741] rounded-t-2xl h-12">
              <tr>
                {headers.map((header) => (
                  <th key={header} className="px-10 py-2 capitalize text-white">
                    {replaceUnderscores(header)}
                  </th>
                ))}
                <th className="px-10 py-2 capitalize text-white">Detail</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert) => (
                <tr key={cert.nib}>
                  <td className="border px-8 py-2 text-center h-12">{cert.nib}</td>
                  <td className="border px-8 py-2 text-center h-12">{cert.iat}</td>
                  <td className="border px-8 py-2 text-center h-12">{cert.loc.c}, {cert.loc.p}</td>
                  <td className="border px-8 py-2 text-center h-12">
                    {cert.det.n + cert.det.e + cert.det.s + cert.det.w} m²
                  </td>
                  <td className="border px-10 py-2 text-center">
                    <Link
                      to="/dashboard/detail/$nib"
                      params={{ nib: String(cert.nib) }}
                      className="flex justify-center items-center"
                    >
                      <img src="/icon/detail.png" className="h-5 w-5" />
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
