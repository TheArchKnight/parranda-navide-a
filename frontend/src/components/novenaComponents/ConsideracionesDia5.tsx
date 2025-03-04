import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia5: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 5 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Ya hemos visto la vida que llevaba el Niño Jesús en el seno de su purísima Madre; 
                    veamos hoy la vida que lleva también María durante el mismo espacio de tiempo.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    María no cesaba de aspirar el momento en que gozaría de esa visión beatífica terrestre, 
                    la faz de Dios encarnado. Estaba a punto de ver aquella faz humana que debía iluminar el cielo 
                    durante toda la eternidad. Iba a leer el amor filial en aquellos mismos ojos cuyos rayos 
                    deberían esparcir para siempre la felicidad en millones de elegidos.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Iba a verle en la ignorancia aparente de la infancia, en los encantos particulares 
                    de la juventud y en la serenidad reflexiva de la edad madura.  
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    ¡Tal era la vida de expectativa de María! Era inaudita en sí misma, mas no por eso 
                    dejaba de ser el tipo magnífico de toda vida cristiana. No nos contentemos con admirar 
                    a Jesús residiendo en María, sino pensemos que en nosotros también reside por esencia, 
                    potencia y presencia.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia5;