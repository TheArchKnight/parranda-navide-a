import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia8: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 8 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Llegan a Belén José y María buscando hospedaje en los mesones, pero no encuentran, ya 
                    por hallarse todos ocupados, ya porque se les rechaza a causa de su pobreza. Empero, 
                    nada puede turbar la paz interior de los que están fijos en Dios.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Si José experimentaba tristeza cuando era rechazado de casa en casa, porque pensaba en 
                    María y en el Niño, también sonreía con santa tranquilidad cuando fijaba la mirada en su 
                    casta esposa. El ruido de cada puerta que se cerraba ante ellos era una dulce melodía 
                    para sus oídos.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Eso era lo que había venido a buscar. El deseo de esas humillaciones fue lo que le llevó a 
                    tomar forma humana. ¡Oh, Divino Niño de Belén! Estos días que tantos han pasado en fiestas 
                    y diversiones, descansando en cómodas y ricas mansiones, han sido para vuestros padres 
                    un tiempo de fatiga y vejaciones de toda clase.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    ¡Ay! El espíritu de Belén es el de un mundo que ha olvidado a Dios. ¡Cuántas veces no ha 
                    sido también el nuestro! Pónese el sol el 24 de diciembre detrás de los tejados de Belén y 
                    sus últimos rayos doran la cima de las rocas escarpadas que lo rodean.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Hombres groseros codean rudamente al Señor en las calles de aquella aldea oriental y 
                    cierran sus puertas al ver a su Madre. La bóveda de los cielos aparece purpurina por 
                    encima de aquellas colinas frecuentadas por los pastores. Las estrellas van apareciendo 
                    unas tras otras. Algunas horas más y aparecerá el Verbo Eterno.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia8;