import React from 'react';
import recetaGif from '../assets/natilla.gif';
import Rating from './Rating';
import Comments from './Comments';

const Natilla: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full text-red-700 gap-8 p-6">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex flex-col items-center text-center gap-2">
                    🍮 Natilla Colombiana 🍮
                </h1>
                <p className="text-lg text-gray-600 italic mt-2 text-center">
                    Un postre tradicional de la Navidad colombiana
                </p>

                <img 
                    src={recetaGif}  
                    alt="Natilla colombiana" 
                    className="w-64 md:w-72 lg:w-96 rounded-lg shadow-md transition-all transform hover:scale-105 border-4 border-red-500 mt-4"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La <span className="font-bold text-red-500">natilla colombiana</span> es un postre típico de la Navidad. 
                    Se elabora con leche, fécula de maíz y panela, logrando una textura cremosa y un sabor dulce y especiado. 
                    Es un símbolo de unión familiar y se disfruta junto a los tradicionales buñuelos.
                </p>

                <h2 className="text-2xl font-bold mt-10">📝 Ingredientes:</h2>
                <ul className="list-disc list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>1 litro de leche</li>
                    <li>1 taza de fécula de maíz (maicena)</li>
                    <li>1 panela rallada o 1 taza de azúcar morena</li>
                    <li>1 rama de canela</li>
                    <li>1 cucharadita de esencia de vainilla</li>
                    <li>1 cucharadita de mantequilla</li>
                    <li>Queso rallado y coco rallado (opcional)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>Disolver la maicena en una parte de la leche fría.</li>
                    <li>En una olla, calentar la leche restante con la panela rallada y la canela hasta que se disuelva.</li>
                    <li>Agregar la mezcla de maicena y cocinar a fuego medio, revolviendo constantemente.</li>
                    <li>Cuando espese, retirar del fuego y agregar la vainilla y la mantequilla.</li>
                    <li>Verter en un molde y dejar enfriar antes de servir.</li>
                    <li>Opcional: decorar con coco rallado o queso rallado.</li>
                </ol>

                <div className="w-full mt-10 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-3">⭐ Califica esta receta</h2>
                    <Rating recipeId={1} />
                </div>

                <div className="w-full max-w-2xl mx-auto mt-10 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-3">💬 Comentarios</h2>
                    <Comments recipeId={1} />
                </div>
            </div>
        </div>
    );
};

export default Natilla;
