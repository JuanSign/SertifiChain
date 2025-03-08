import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/home/')({
  component: LandingPage,
})

/**
* LandingPage component renders the main landing page layout with various sections
* including hero section, transparency features, capabilities, FAQ, and footer.
* 
* The component renders a hero section with a heading, paragraph, and a call-to-action
* button. It then renders a section for enhancing transaction transparency with
* blockchain technology, which includes three feature cards. The component also
* renders a section for showing what can be done with the application, which includes
* three cards with buttons. Finally, the component renders a section for frequently
* asked questions, which includes three details elements.
*/
function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#0A0F1E] text-white font-poppins">

      {/* Hero Section */}
      {/* 
       * The hero section includes a heading, paragraph, and a call-to-action button
       * to encourage users to sign up for the service.
       */}
      <section className="flex flex-col items-center text-center px-6 py-40" id="about">
        <h1 className="text-[64px] font-bold leading-tight">
          Lorem ipsum dolor sit amet <br />
          <span className="bg-gradient-to-r from-[#3355FF] to-[#69CFB5] bg-clip-text text-transparent">
            Sertifichain
          </span>
        </h1>
        <p className="text-[20px] text-gray-300 mt-10 max-w-3xl">
          Lorem ipsum dolor sit amet consectetur. Faucibus arcu hendrerit massa in.
          Urna nunc sed tellus quam turpis.
        </p>
        <button className="relative mt-10 px-8 py-4 text-[20px] font-semibold rounded-lg border border-white text-white 
                   transition-all duration-300 ease-in-out overflow-hidden 
                   before:absolute before:inset-0 before:bg-gradient-to-b before:from-[#242447] before:via-[#222532] before:to-[#080C29] 
                   before:scale-0 before:transition-transform before:duration-300 before:ease-in-out 
                   hover:before:scale-100 hover:shadow-[0px_0px_25px_4px_rgba(171,123,255,0.4)] hover:scale-105">
          <span className="relative z-10">Let’s Get Started</span>
        </button>
      </section>

      {/* Enhancing Transaction Transparency */}
      {/* 
       * This section showcases how blockchain technology can be used to enhance
       * transaction transparency.
       */}
      <section className="text-center py-25" id="tech">
        <h2 className="text-[40px] font-bold">
          Enhancing Transaction Transparency <br />
          <span className="text-[40px] font-bold">with Blockchain Technology</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-19 mt-20">
          {/* Feature Cards */}
          {/* Card 1 */}
          {/* 
           * Card 1: Smart Contract
           * 
           * This card showcases the smart contract feature of the application.
           * A smart contract is a self-executing contract with the rules of the
           * agreement written directly into lines of code.
           */}
          <div className="relative w-72 p-[2px] rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-[#1E2432] transition-transform duration-300 hover:scale-120 border border-white/20 transition-all duration-300">
            <div className="bg-gradient-to-tr from-[#1A1A1A]/30 via-[#1A1A1A]/5 to-transparent p-6 rounded-lg text-center">
              <img src="/smartcontract.png" alt="Smart Contract" className="w-16 h-16 mx-auto opacity-80" />
              <h3 className="text-xl font-bold mt-4 text-white">Smart Contract</h3>
              <p className="text-white-400 text-sm mt-6 text-left">
                Mengotomatisasi transfer kepemilikan tanah dengan keamanan tinggi tanpa perantara memanfaatkan Smart Contract.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          {/* 
           * Card 2: Decentralized
           * 
           * This card showcases the decentralized nature of the application.
           * Decentralized means that there is no central authority controlling the
           * application, and that the application is instead run by a network of
           * computers.
           */}
          <div className="relative w-72 p-[2px] rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-[#1E2432] transition-transform duration-300 hover:scale-120 border border-white/20 transition-all duration-300">
            <div className="bg-gradient-to-tr from-[#1A1A1A]/30 via-[#1A1A1A]/5 to-transparent p-6 rounded-lg text-center">
              <img src="/immutable.png" alt="Immutable" className="w-16 h-16 mx-auto opacity-80" />
              <h3 className="text-xl font-bold mt-4 text-white">Immutable</h3>
              <p className="text-white-400 text-sm mt-6 text-left">
                Semua transaksi tercatat permanen, mudah diverifikasi, dan tidak bisa diubah.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          {/* 
           * Card 3: Secure Transactions
           * 
           * This card showcases the secure transactions feature of the application.
           * Secure transactions are transactions that are protected by advanced
           * cryptography, such as encryption and digital signatures.
           */}
          <div className="relative w-72 p-[2px] rounded-xl bg-gradient-to-tr from-white/10 via-transparent to-[#1E2432] transition-transform duration-300 hover:scale-120 border border-white/20 transition-all duration-300">
            <div className="bg-gradient-to-tr from-[#1A1A1A]/30 via-[#1A1A1A]/5 to-transparent p-6 rounded-lg text-center">
              <img src="/decentralized.png" alt="Decentralized" className="w-16 h-16 mx-auto opacity-80" />
              <h3 className="text-xl font-bold mt-4 text-white">Decentralized</h3>
              <p className="text-white-400 text-sm mt-6 text-left">
                Menyimpan sertifikat di Blockchain, memastikan kepemilikan sah tanpa otoritas tunggal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Can We Do? */}
      {/* 
       * This section showcases what can be done with the application.
       */}
      <section className="py-16" id="feature">
        <h2 className="text-[40px] font-bold text-center">What Can We Do?</h2>
        <div className="flex flex-col items-center gap-8 mt-10">

          <div className="w-[80%] md:w-[60%] p-8 rounded-[30px] shadow-lg bg-gradient-to-r from-[#2C6267] via-[#254E60] to-[#193551] text-white">
            <h3 className="text-[32px] font-bold">Cek Sertifikat</h3>
            <p className="text-white font-normal text-[16px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Risus imperdiet et proin eu ornare nibh auctor..
              Sapien pulvinar porttitor fames pellentesque morbi.. Tristique sed id porta suspendisse vitae..
              Fusce ac donec id sed amet aenean scelerisque.
            </p>
            <Link to="/cek-sertifikat" className="relative mt-4 w-[240px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#152F55] to-[#1B3D83] 
                         text-[15px] text-white font-medium shadow-md shadow-[#0D1D3D]/50 hover:scale-105 transition 
                         border border-gray-500/50 flex justify-center items-center text-center whitespace-nowrap 
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-[#1B3D83]/50 
                         before:opacity-50 before:blur-md">
              Cek Sertifikat
            </Link>
          </div>

          <div className="w-[80%] md:w-[60%] p-8 rounded-[30px] shadow-lg bg-gradient-to-r from-[#2C6267] via-[#254E60] to-[#193551] text-white">
            <h3 className="text-[32px] font-bold">Cek Daftar Kepemilikan</h3>
            <p className="text-white font-normal text-[16px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Risus imperdiet et proin eu ornare nibh auctor..
              Sapien pulvinar porttitor fames pellentesque morbi.. Tristique sed id porta suspendisse vitae..
              Fusce ac donec id sed amet aenean scelerisque.
            </p>
            <button className="relative mt-4 w-[240px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#152F55] to-[#1B3D83] 
                         text-[14px] text-white font-medium shadow-md shadow-[#0D1D3D]/50 hover:scale-105 transition 
                         border border-gray-500/50 flex justify-center items-center text-center whitespace-nowrap 
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-[#1B3D83]/50 
                         before:opacity-50 before:blur-md">
              Daftar Kepemilikan
            </button>
          </div>

          <div className="w-[80%] md:w-[60%] p-8 rounded-[30px] shadow-lg bg-gradient-to-r from-[#2C6267] via-[#254E60] to-[#193551] text-white">
            <h3 className="text-[32px] font-bold">Pindah Tangan Sertifikat</h3>
            <p className="text-white font-normal text-[16px] mt-2">
              Lorem ipsum dolor sit amet consectetur. Risus imperdiet et proin eu ornare nibh auctor..
              Sapien pulvinar porttitor fames pellentesque morbi.. Tristique sed id porta suspendisse vitae..
              Fusce ac donec id sed amet aenean scelerisque.
            </p>
            <button className="relative mt-4 w-[240px] px-6 py-3 rounded-lg bg-gradient-to-r from-[#152F55] to-[#1B3D83] 
                         text-[13px] text-white font-medium shadow-md shadow-[#0D1D3D]/50 hover:scale-105 transition 
                         border border-gray-500/50 flex justify-center items-center text-center whitespace-nowrap 
                         before:absolute before:inset-0 before:rounded-lg before:border before:border-[#1B3D83]/50 
                         before:opacity-50 before:blur-md">
              Pindah Tangan Sertifikat
            </button>
          </div>

        </div>
      </section>


      {/* FAQ */}
      {/* 
       * This section showcases frequently asked questions.
       */}
      <section className="py-16" id="FAQ">
        <h2 className="text-[40px] font-bold text-center text-white">Frequently Asked Questions</h2>
        <div className="mt-10 max-w-5xl mx-auto space-y-4">
          {[
            "Question 1",
            "Question 2",
            "Question 3",
            "Question 4",
          ].map((faq, index) => (
            <details
              key={index}
              className="group bg-gradient-to-b from-[#E5E5E5]/10 to-[#FFFFFF]/10 p-5 rounded-xl shadow-lg shadow-white/5 border border-white/20 transition-all duration-300"
            >
              <summary className="cursor-pointer text-[20px] font-normal flex justify-between items-center text-[#FFFFFF]">
                {faq}
                <img
                  src="/arrow.png"
                  alt="Arrow"
                  className="w-5 h-5 object-contain transition-transform duration-300 group-open:rotate-180"
                />
              </summary>
              <p className="mt-2 text-[16px] text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400">
        2025 © Sertifichain. All Rights Reserved.
      </footer>

    </div>
  );
}

export default LandingPage;
