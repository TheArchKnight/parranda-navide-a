import React from 'react';
import recetaGif from '../assets/buñuelos.gif';

const Buñuelos: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full bg-white text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🍩 Buñuelos Colombianos 🍩
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    El infaltable acompañante de la Navidad colombiana
                </p>

                <img 
                    src={recetaGif}  
                    alt="Buñuelos colombianos" 
                    className="w-64 h-64 rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-red-500"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    Los <span className="font-bold text-red-500">buñuelos</span> son una fritura esponjosa y dorada a base de 
                    almidón de yuca y queso costeño. Son una parte esencial de la Navidad y se disfrutan junto con la natilla.
                </p>

                <h2 className="text-2xl font-bold mt-6">📝 Ingredientes:</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>1 taza de almidón de yuca</li>
                    <li>1 taza de queso costeño rallado</li>
                    <li>1 huevo</li>
                    <li>1 cucharada de azúcar</li>
                    <li>1 cucharadita de polvo de hornear</li>
                    <li>Leche (cantidad necesaria)</li>
                    <li>Aceite para freír</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-inside text-lg text-gray-700">
                    <li>Mezclar el almidón, el queso, el huevo, el azúcar y el polvo de hornear.</li>
                    <li>Agregar leche poco a poco hasta obtener una masa suave.</li>
                    <li>Formar bolitas y freír en aceite caliente hasta que estén doradas.</li>
                    <li>Escurrir en papel absorbente y servir calientes.</li>
                </ol>
            </div>
        </div>
    );
};

export default Buñuelos;
