import { createFileRoute, Link } from '@tanstack/react-router'
import Divider from "../components/divider";


export const Route = createFileRoute('/success')({
  component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="fixed inset-0 flex items-center justify-center py-32">
        <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/65 p-6 rounded-lg w-5/12 flex flex-col items-center text-white min-w-1/3 space-y-2 px-16">
            <h2 className="text-2xl font-bold">Transaksi Berhasil</h2>
            <img src="/icon/check.png"/>
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
            <p className='mt-6'>Transaksi anda berhasil diverifikasi oleh sistem </p>
            <Link to="/" className="mt-2 bg-gradient-to-b from-[#102552] to-[#1B3E88] w-1/3 rounded-md py-2 border-1 border-gray-400 shadow-center shadow-white">
                <p className='text-center'>Halaman Utama</p>
            </Link>
        </div>
        </div>
    );
};