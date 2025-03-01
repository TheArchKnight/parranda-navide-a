import React from 'react';
import velitasGif from '../assets/PrenderVelitas.gif';

const PrenderVelitas: React.FC = () => {
    return (
        <div className="flex flex-1 items-start justify-start w-full h-full text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🕯️ Prender Velitas 🕯️
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    Un ritual para iluminar el camino y atraer bendiciones
                </p>

                <img 
                    src={velitasGif} 
                    alt="Prender Velitas" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    El <span className="font-bold text-red-500">Día de las Velitas</span> es una celebración tradicional en países como Colombia y Venezuela. 
                    Se realiza el 7 de diciembre, encendiendo velas y faroles en honor a la Virgen María y para dar la bienvenida a la temporada navideña. 
                    Este ritual simboliza la luz que guía el camino de las personas, atrayendo esperanza, paz y buenos deseos para el nuevo año.
                </p>
            </div>
        </div>
    );
};

export default PrenderVelitas;
