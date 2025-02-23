import {icons} from "./Data";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold">
                <div className="flex items-center gap-2">
                    < img onClick={()=>navigate(-1)} className="w-8 bg-red-500 p-2 rounded-2xl cursor-pointer" src={icons.left_arrow} alt=""/>
                    < img onClick={()=>navigate(1)}  className="w-8 bg-red-500 p-2 rounded-2xl cursor-pointer" src={icons.right_arrow} alt=""/>
                </div>
                <div className="flex items-center gap-2">
                    <p className="bg-red-500 text-white text-[25px] px-10 py-1 rounded-full hidden md:block">Biblioteca Navideña</p>
                </div>
            </div>
            {/*<div className="flex items-center gap-2 mt-4">
                <p className="bg-white text-black px-4 py-1 rounded-full">Musica</p>
            </div>*/}
        </>
    )
}
export default NavBar;