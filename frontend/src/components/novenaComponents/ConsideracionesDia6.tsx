import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia6: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 6 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Jesús había sido concebido en Nazaret, domicilio de José y María, y allí era de creerse 
                    que había de nacer, según todas las probabilidades.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Mas Dios lo tenía dispuesto de otra manera, y los profetas habían anunciado que el Mesías 
                    nacería en Belén de Judá, ciudad de David. Para que se cumpliese esta predicción, Dios se 
                    sirvió de un medio que no parecía tener ninguna relación con este objeto, a saber: la orden 
                    dada por el emperador Augusto de que todos los súbditos del imperio romano se empadronasen 
                    en el lugar de donde eran originarios.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    María y José, como descendientes que eran de David, estaban obligados a ir a Belén. 
                    No ignoraba Jesús en qué lugar debía nacer y así inspira a sus padres que se entreguen 
                    a la Providencia, y que de esta manera concurran a la ejecución de sus designios.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Almas interiores, observad este manejo del Divino Niño, porque es el más importante 
                    de la vida espiritual: aprended que el que se haya entregado a Dios ya no ha de pertenecer 
                    a sí mismo, ni ha de querer sino lo que Dios quiera para él.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia6;