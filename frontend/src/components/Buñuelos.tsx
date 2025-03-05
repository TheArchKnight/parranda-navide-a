import React from 'react';
import recetaGif from '../assets/buñuelos.gif';
import Rating from './Rating';
import Comments from './Comments';

const Buñuelos: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full text-red-700 gap-8 p-6">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex flex-col items-center text-center gap-2">
                    🍩 Buñuelos Colombianos 🍩
                </h1>
                <p className="text-lg text-gray-600 italic mt-2 text-center">
                    El infaltable acompañante de la Navidad colombiana
                </p>

                <img 
                    src={recetaGif}  
                    alt="Buñuelos colombianos" 
                    className="w-64 md:w-72 lg:w-96 rounded-lg shadow-md transition-all transform hover:scale-105 border-4 border-red-500 mt-4"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    Los <span className="font-bold text-red-500">buñuelos</span> son una fritura esponjosa y dorada a base de 
                    almidón de yuca y queso costeño. Son una parte esencial de la Navidad y se disfrutan junto con la natilla.
                </p>

                <h2 className="text-2xl font-bold mt-10">📝 Ingredientes:</h2>
                <ul className="list-disc list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>1 taza de almidón de yuca</li>
                    <li>1 taza de queso costeño rallado</li>
                    <li>1 huevo</li>
                    <li>1 cucharada de azúcar</li>
                    <li>1 cucharadita de polvo de hornear</li>
                    <li>Leche (cantidad necesaria)</li>
                    <li>Aceite para freír</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>Mezclar el almidón, el queso, el huevo, el azúcar y el polvo de hornear.</li>
                    <li>Agregar leche poco a poco hasta obtener una masa suave.</li>
                    <li>Formar bolitas y freír en aceite caliente hasta que estén doradas.</li>
                    <li>Escurrir en papel absorbente y servir calientes.</li>
                </ol>

                <div className="w-full mt-10 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-3">⭐ Califica esta receta</h2>
                    <Rating recipeId={2} />
                </div>

                <div className="w-full max-w-2xl mx-auto mt-10 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-3">💬 Comentarios</h2>
                    <Comments recipeId={2} />
                </div>
            </div>
        </div>
    );
};

export default Buñuelos;
