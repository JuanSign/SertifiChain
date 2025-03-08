import { createFileRoute, Link } from '@tanstack/react-router'
import PindahTanganHeader from '../../components/pindah_tangan_header';
import { useState } from 'react';
import Sertifikat from '../../components/sertif';
import Step1 from '../../components/pindah-tangan/step1';
import Step2 from '../../components/pindah-tangan/step2';
import Step3 from '../../components/pindah-tangan/step3';

export const Route = createFileRoute('/pindah-tangan/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [ step, setStep ] = useState<number>(1);

  const nextStep = () => {
    setStep((prev) => (prev + 1));
  }

  const prevStep = () => {
    setStep((prev) => (prev - 1));
  }

  return (
    <div className='w-screen min-h-screen px-20 py-8 space-y-8 flex-col'>
      <Link className="flex items-center space-x-2" to="/dashboard/pindah-tangan">
        <img src="/icon/back_arrow.png" className='w-2'/>
        <span className="text-md text-white underline">Pindah Tangan Sertifikat</span>
      </Link>

      <PindahTanganHeader state={step} />
      <div className='px-20 flex flex-col items-center'>
        { step === 1 ? <Step1 next={nextStep}/> : null }
        { step === 2 ? <Step2 next={nextStep} prev={prevStep}/> : null }
        { step === 3 ? <Step3 prev={prevStep}/> : null }
      </div>
     
    </div>
  );
};

