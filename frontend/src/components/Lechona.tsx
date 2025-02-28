import React from 'react';
import recetaGif from '../assets/las-12-uvas.gif';

const Lechona: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full bg-white text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start bg-red-100/80 p-8 shadow-lg">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2">
                    🐷 Lechona Tolimense 🐷
                </h1>
                <p className="text-lg text-gray-600 italic mt-2">
                    Un plato icónico de la gastronomía colombiana
                </p>

                <img 
                    src={recetaGif} 
                    alt="Lechona Tolimense" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6"
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    La <span className="font-bold text-red-500">lechona tolimense</span> es uno de los platos más representativos de Colombia. 
                    Consiste en cerdo relleno de arroz y arvejas, horneado durante varias horas hasta obtener una piel crocante.
                </p>

                <h2 className="text-2xl font-bold mt-6">📝 Ingredientes:</h2>
                <ul className="list-disc list-inside text-lg text-gray-700">
                    <li>1 pierna de cerdo (5 kg aproximadamente)</li>
                    <li>1 kg de arroz</li>
                    <li>500 g de arveja amarilla</li>
                    <li>2 cebollas largas picadas</li>
                    <li>1 cabeza de ajo</li>
                    <li>Sal, pimienta y comino al gusto</li>
                </ul>

                <h2 className="text-2xl font-bold mt-6">👨‍🍳 Preparación:</h2>
                <ol className="list-decimal list-inside text-lg text-gray-700">
                    <li>Marinar la carne de cerdo con ajo, cebolla, sal y especias por 24 horas.</li>
                    <li>Preparar el arroz con las arvejas y las especias.</li>
                    <li>Rellenar la pierna de cerdo con la mezcla y hornear por 4 horas.</li>
                    <li>Servir caliente acompañado de arepa blanca.</li>
                </ol>
            </div>
        </div>
    );
};

export default Lechona;
