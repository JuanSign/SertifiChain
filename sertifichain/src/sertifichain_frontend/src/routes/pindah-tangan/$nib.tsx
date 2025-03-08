import { createFileRoute, Link, useParams } from '@tanstack/react-router'
import PindahTanganHeader from '../../components/pindah_tangan_header';
import { useEffect, useState } from 'react';
import Step1 from '../../components/pindah-tangan/step1';
import Step2 from '../../components/pindah-tangan/step2';
import Step3 from '../../components/pindah-tangan/step3';
import { Certificate } from '../../components/sertif';
import { sertifichain_backend } from '../../../../declarations/sertifichain_backend';

export const Route = createFileRoute('/pindah-tangan/$nib')({
  component: RouteComponent,
})

function RouteComponent() {
  const [step, setStep] = useState<number>(1);
  const { nib } = useParams({ strict: false });
  const [certificate, setCertificate] = useState<Certificate | null>(null);
  const [target, setTarget] = useState<String | null>(null);

  useEffect(() => {
    async function fetchCertificate() {
      try {
        if (!nib) {
          setCertificate(null);
          return;
        }
        const cert = await sertifichain_backend.get_certificate(nib);

        if (Array.isArray(cert) && cert.length > 0) {
          setCertificate(cert[0] as unknown as Certificate);
        } else {
          alert('Sertifikat tidak ditemukan.');
          setCertificate(null);
        }
      } catch (error) {
        alert('Gagal mengambil sertifikat. Periksa koneksi atau coba lagi.');
        setCertificate(null);
      }
    }

    if (nib) {
      fetchCertificate();
    }
  }, [nib]);

  const nextStep = () => {
    setStep((prev) => (prev + 1));
  }

  const prevStep = () => {
    setStep((prev) => (prev - 1));
  }

  const handleSubmit = (s: String) => {
    setTarget(s);
  }

  return (
    <div className='max-w-screen min-h-screen px-20 py-8 space-y-8 flex-col'>
      <Link className="flex items-center space-x-2" to="/dashboard/pindah-tangan">
        <img src="/icon/back_arrow.png" className='w-2' />
        <span className="text-md text-white underline">Pindah Tangan Sertifikat</span>
      </Link>

      <PindahTanganHeader state={step} />
      <div className='px-20 flex flex-col items-center'>
        {step === 1 && <Step1 next={nextStep} cert={certificate} />}
        {step === 2 && <Step2 next={nextStep} prev={prevStep} handler={handleSubmit} />}
        {step === 3 && <Step3 next={nextStep} prev={prevStep} cert={certificate} target={target} />}
      </div>

    </div>
  );
};

