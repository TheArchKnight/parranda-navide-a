import React from 'react';
import recetaGif from '../assets/lechona.gif';
import Rating from './Rating';
import Comments from './Comments';

const Lechona: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full text-red-700 gap-8 p-6">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex flex-col items-center text-center gap-2">
                    🐷 Lechona Tolimense 🐷
                </h1>
                <p className="text-lg text-gray-600 italic mt-2 text-center">
                    Un plato icónico de la gastronomía colombiana
                </p>

                <img 
                    src={recetaGif}  
                    alt="Lechona Tolimense" 
                    className="w-64 md:w-72 lg:w-96 rounded-lg shadow-md transition-all transform hover:scale-105 border-4 border-red-500 mt-4"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La <span className="font-bold text-red-500">lechona tolimense</span> es uno de los platos más representativos de Colombia. 
                    Consiste en cerdo relleno de arroz y arvejas, horneado durante varias horas hasta obtener una piel crocante.
                </p>

                <h2 className="text-2xl font-bold mt-10">📝 Ingredientes:</h2>
                <ul className="list-disc list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>1 pierna de cerdo (5 kg aproximadamente)</li>
                    <li>1 kg de arroz</li>
                    <li>500 g de arveja amarilla</li>
                    <li>2 cebollas largas picadas</li>
                    <li>1 cabeza de ajo</li>
                    <li>Sal, pimienta y comino al gusto</li>
                </ul>

                <h2 className="text-2xl font-bold mt-10">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-outside text-lg text-gray-700 mt-4 pl-6">
                    <li>Marinar la carne de cerdo con ajo, cebolla, sal y especias por 24 horas.</li>
                    <li>Preparar el arroz con las arvejas y las especias.</li>
                    <li>Rellenar la pierna de cerdo con la mezcla y hornear por 4 horas.</li>
                    <li>Servir caliente acompañado de arepa blanca.</li>
                </ol>

                <div className="w-full mt-10 flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center mb-3">⭐ Califica esta receta</h2>
                    <Rating recipeId={3} />
                </div>

                <div className="w-full max-w-2xl mx-auto mt-10 bg-white p-5 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center mb-3">💬 Comentarios</h2>
                    <Comments recipeId={3} />
                </div>
            </div>
        </div>
    );
};

export default Lechona;
