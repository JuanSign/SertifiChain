import { ReactNode } from "react";

const Wrapper = ({children, text} : {children: ReactNode, text: string}) => {
    return (
        <div className="w-full text-white">
            <p className="text-white text-bold text-lg mb-1">{text}</p>
            {children}
            <hr className="w-full border-t border-gray-300 mt-2" />
        </div>
    );
};

export default Wrapper;