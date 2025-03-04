import React from 'react';
import quemaGif from '../assets/QuemaAñoViejo.gif';

const QuemaAnoViejo: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full text-red-700 gap-8 p-6">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex flex-col items-center text-center gap-2">
                    🔥 Quema del Año Viejo 🔥
                </h1>
                <p className="text-lg text-gray-600 italic mt-2 text-center">
                    Un ritual para dejar atrás lo malo y empezar con energía renovada
                </p>

                <img 
                    src={quemaGif} 
                    alt="Quema del Año Viejo" 
                    className="w-64 md:w-72 lg:w-96 rounded-lg shadow-md transition-all transform hover:scale-105 border-4 border-red-500"
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
