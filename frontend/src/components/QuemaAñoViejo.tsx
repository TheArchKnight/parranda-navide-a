import React from 'react';
import quemaGif from '../assets/QuemaAñoViejo.gif';

const QuemaAnoViejo: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full bg-white text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start bg-red-100/80 p-8 shadow-lg">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🔥 Quema del Año Viejo 🔥
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    Un ritual para dejar atrás lo malo y empezar con energía renovada
                </p>

                <img 
                    src={quemaGif} 
                    alt="Quema del Año Viejo" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La <span className="font-bold text-red-500">Quema del Año Viejo</span> es una tradición popular en varios países 
                    de América Latina. Se elabora un muñeco que representa el año que termina, a menudo relleno de pólvora, 
                    y se quema a la medianoche del 31 de diciembre. Este ritual simboliza el cierre de un ciclo, dejando atrás las 
                    malas experiencias para dar paso a un nuevo comienzo.  
                </p>
            </div>
        </div>
    );
};

export default QuemaAnoViejo;
