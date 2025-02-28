import React from 'react';
import recetaGif from '../assets/las-12-uvas.gif';

const Natilla: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full bg-white text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start bg-red-100/80 p-8 shadow-lg">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🍮 Natilla Colombiana 🍮
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    Un postre tradicional de la Navidad colombiana
                </p>

                <img 
                    src={recetaGif} 
                    alt="Natilla colombiana" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La <span className="font-bold text-red-500">natilla colombiana</span> es un postre típico de la Navidad. 
                    Se elabora con leche, fécula de maíz y panela, logrando una textura cremosa y un sabor dulce y especiado. 
                    Es un símbolo de unión familiar y se disfruta junto a los tradicionales buñuelos.
                </p>

                <h2 className="text-2xl font-bold mt-6">📝 Ingredientes:</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>1 litro de leche</li>
                    <li>1 taza de fécula de maíz (maicena)</li>
                    <li>1 panela rallada o 1 taza de azúcar morena</li>
                    <li>1 rama de canela</li>
                    <li>1 cucharadita de esencia de vainilla</li>
                    <li>1 cucharadita de mantequilla</li>
                    <li>Queso rallado y coco rallado (opcional)</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-inside text-lg text-gray-700">
                    <li>Disolver la maicena en una parte de la leche fría.</li>
                    <li>En una olla, calentar la leche restante con la panela rallada y la canela hasta que se disuelva.</li>
                    <li>Agregar la mezcla de maicena y cocinar a fuego medio, revolviendo constantemente.</li>
                    <li>Cuando espese, retirar del fuego y agregar la vainilla y la mantequilla.</li>
                    <li>Verter en un molde y dejar enfriar antes de servir.</li>
                    <li>Opcional: decorar con coco rallado o queso rallado.</li>
                </ol>
            </div>
        </div>
    );
};

export default Natilla;
