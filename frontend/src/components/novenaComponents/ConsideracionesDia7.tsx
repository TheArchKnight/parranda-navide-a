import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia7: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 7 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Representémonos el viaje de María y José hacia Belén, llevando consigo aún no nacido, 
                    al creador del universo, hecho hombre. Contemplemos la humildad y la obediencia de ese 
                    Divino Niño, que aunque de raza judía y habiendo amado durante siglos a su pueblo con 
                    una predilección inexplicable, obedece así a un príncipe extranjero que forma el censo 
                    de población de su provincia.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Como si hubiese para él en esa circunstancia algo que le halagase, y quisiera apresurarse 
                    a aprovechar la ocasión de hacerse empadronar oficial y auténticamente como súbdito en el 
                    momento en que venía al mundo.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    El anhelo de José, la expectativa de María son cosas que no puede expresar el lenguaje 
                    humano. El Padre Eterno se halla, si nos es lícito emplear esta expresión, adorablemente 
                    impaciente por dar a su hijo único al mundo y verle ocupar su puesto entre las criaturas 
                    visibles.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    El Espíritu Santo arde en deseos de presentar a la luz del día esa santa humanidad, que 
                    Él mismo ha formado con divino esmero.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia7;