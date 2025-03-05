import { icons } from "./Data";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        // Si estamos en la página de inicio, no hacemos nada
        if (location.pathname === "/") return;

        // Si hay historial de navegación, retrocedemos
        if (window.history.state && window.history.state.idx > 0) {
            navigate(-1);
        }
    };
    

    return (
        <>
            <div className="w-full flex justify-end">
                <p className="bg-red-500 text-white text-lg md:text-xl lg:text-2xl px-5 py-2 rounded-full">
                    Biblioteca Navideña
                </p>
            </div>
            <div className="w-full flex justify-start items-center gap-2 px-4 pb-1">
                <img 
                    onClick={handleBack} 
                    className="w-10 h-10 bg-red-500 p-2 rounded-full cursor-pointer transition-transform hover:scale-105" 
                    src={icons.left_arrow} 
                    alt="Retroceder"
                />
                <img 
                    onClick={() => navigate(1)} 
                    className="w-10 h-10 bg-red-500 p-2 rounded-full cursor-pointer transition-transform hover:scale-105" 
                    src={icons.right_arrow} 
                    alt="Avanzar"
                />
            </div>
        </>
    );
};

export default NavBar;
