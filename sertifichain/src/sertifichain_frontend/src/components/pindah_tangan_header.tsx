const PindahTanganHeader = ({ state }: { state: number }) => {
    return (
        <header className="w-full flex flex-row items-center px-16">
            <div className="mr-auto">
                <img 
                    src="/icon/pindah_tangan_header/1.png" 
                    className={`rounded-full p-3 ${state >= 1 ? "bg-[#3355FF]" : "bg-[#999999]"} w-12 mx-auto mb-1.5`}
                />
                <p className="text-white text-center text-sm">Cek Dokumen</p>
            </div>

            <hr className={`w-full mb-auto mt-6 border-t border-4 rounded-full mx-4 ${state >= 2 ? "border-[#3355FF]" : "border-[#999999]"}`} />
            
            <div>
                <img 
                    src="/icon/pindah_tangan_header/2.png" 
                    className={`rounded-full p-3 ${state >= 2 ? "bg-[#3355FF]" : "bg-[#999999]"} w-12 mx-auto mb-1.5`}
                />
                <p className="text-white text-center text-sm">Pilih Penerima</p>

            </div>
            
            <hr className={`w-full mb-auto mt-6 border-t border-4 rounded-full mx-4 ${state >= 3 ? "border-[#3355FF]" : "border-[#999999]"}`} />
            
            <div className="ml-auto">
                <img 
                    src="/icon/pindah_tangan_header/3.png" 
                    className={`rounded-full p-3 ${state >= 3 ? "bg-[#3355FF]" : "bg-[#999999]"} w-12 mx-auto mb-1.5`}
                />
                <p className="text-white text-center text-sm">Konfirmasi Transaksi</p>
            </div>
        </header>
    );
};

export default PindahTanganHeader;
