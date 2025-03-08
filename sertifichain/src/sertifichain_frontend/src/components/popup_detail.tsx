import Divider from "./divider";

const PopUpDetail = ({ onClose } : { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60">
        <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/65 p-6 rounded-lg w-96 flex flex-col items-center text-white min-w-1/3 space-y-2">
            <button 
                className="ml-auto"
                onClick={() => onClose()}
                >
                <img src="/icon/exit.png" className=" w-4 h-4"/>
            </button>
            <h2 className="text-2xl font-bold mb-8">Detail Transaksi</h2>
            <span className="flex flex-row justify-between w-full">
                <p className="font-bold">ID Transaksi</p>
                <p>XXXXXXX</p>
            </span>
            <span className="flex flex-row justify-between w-full">
                <p className="font-bold">NIB</p>
                <p>XXXXXXX</p>
            </span>
            <span className="flex flex-row justify-between w-full">
                <p className="font-bold">Status</p>
                <p className="text-[#009933] font-bold ">Success</p>
            </span>
            <Divider/>
            <span className="flex flex-row justify-between w-full">
                <p className="font-bold">Tanggal Transaksi</p>
                <p>12/03/2025</p>
            </span>
            <span className="flex flex-row justify-between w-full">
                <p className="font-bold">Waktu Transaksi</p>
                <p>19.00 WIB</p>
            </span>
            <Divider/>
            <p className="font-bold mr-auto">Pengirim</p>
            <span className="flex flex-row justify-between w-full">
                <p>Nama</p>
                <p>Izhar Alif Akbar</p>
            </span>
            <span className="flex flex-row justify-between w-full">
                <p>ID Pengirim</p>
                <p>XXXXXXX</p>
            </span>
            <Divider/>
            <p className="font-bold mr-auto">Penerima</p>
            <span className="flex flex-row justify-between w-full">
                <p>Nama</p>
                <p>Rifki Virzaya</p>
            </span>
            <span className="flex flex-row justify-between w-full">
                <p>ID Penerima</p>
                <p>XXXXXXX</p>
            </span>
        </div>
        </div>
    );
};

export default PopUpDetail;