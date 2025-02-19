import React from 'react';
import uvasGif from '../assets/las-12-uvas.gif';

const Las12Uvas: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full bg-white text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start bg-red-100/80 p-8 shadow-lg">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🍇 Las 12 Uvas 🍇
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    Un ritual para atraer suerte y prosperidad
                </p>

                <img 
                    src={uvasGif} 
                    alt="Las 12 Uvas en Año Nuevo" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La tradición de las <span className="font-bold text-red-500">12 uvas de la suerte</span> se originó en España 
                    a principios del siglo XX y se ha extendido por toda América Latina. Consiste en comer una uva con cada 
                    campanada de la medianoche en Año Nuevo, pidiendo un deseo por cada una.  
                </p>
            </div>
        </div>
    );
};

export default Las12Uvas;
