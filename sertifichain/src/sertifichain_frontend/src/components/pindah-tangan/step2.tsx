
const Step2 = ({ next, prev } : { next: () => void, prev: () => void}) => {
    return (
        <div className="bg-[linear-gradient(40deg,#16326D,#4965A0)] shadow-centered  shadow-white/25 p-6 rounded-lg min-w-1/2 flex flex-col items-center text-white space-y-2 py-8">
            <h1 className="text-xl font-bold text-white">Konfirmasi Identitas Pertama</h1>

            <div className="flex flex-col space-y-2 mt-8 w-1/2">
                <label className="text-white text-md font-semibold">Identifier Penerima</label>
                <input 
                    type="text" 
                    placeholder="Enter Internet Identity" 
                    className="w-full rounded-lg p-2 bg-white text-gray-900 shadow-md focus:outline-none text-md"
                />
                <div className="flex flex-row mt-8 text-center text-white space-x-2 w-full text-sm">
                    <button onClick={prev} className="bg-[#FF7F00] w-1/2 rounded-md py-2">
                        <p>Batal</p>
                    </button>
                    <button onClick={next} className="bg-gradient-to-b from-[#102552] to-[#1B3E88] w-1/2 rounded-md py-2">
                        <p>Lanjutkan</p>
                    </button>
                </div>
            </div>
            <p className="text-[#FF7F00] text-sm mt-8">Powered by:</p>
            <img src="/icp.png" className="w-36"/>
        </div>
    );
};

export default Step2;