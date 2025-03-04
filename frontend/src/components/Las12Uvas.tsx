import React from 'react';
import uvasGif from '../assets/las-12-uvas.gif';

const Las12Uvas: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full text-red-700 gap-8 p-6">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex flex-col items-center text-center gap-2">
                    🍇 Las 12 Uvas 🍇
                </h1>
                <p className="text-lg text-gray-600 italic mt-2 text-center">
                    Un ritual para atraer suerte y prosperidad
                </p>

                <img 
                    src={uvasGif} 
                    alt="Las 12 Uvas en Año Nuevo" 
                    className="w-64 md:w-72 lg:w-96 rounded-lg shadow-md transition-all transform hover:scale-105 border-4 border-red-500"
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
