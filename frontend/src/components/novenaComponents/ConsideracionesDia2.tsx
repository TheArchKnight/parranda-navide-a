import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia2: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 2 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    El Verbo eterno se halla a punto de tomar su naturaleza creada en la santa Casa de
                    Nazaret en donde moraban María y José. Cuando la sombra del secreto divino vino a
                    deslizarse sobre ella, María estaba sola engolfada en la oración.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Pasaba las silenciosas horas de la noche en la unión más estrecha con Dios y mientras oraba,
                    el Verbo tomó posesión de su morada creada. Sin embargo, no llegó inopinadamente;
                    antes de presentarse envió un mensajero, que fue el Arcángel San Gabriel, para pedir
                    a María de parte de Dios su consentimiento para la encarnación.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Aquel momento fue muy solemne. Era potestativo en María el rehusar...
                    ¡Con qué adorables delicias! Con qué inefables complacencias aguardaría la Santísima
                    Trinidad a que María abriese los labios y pronunciase el Sí que debió ser suave melodía
                    para sus oídos, y con el cual se conformaba su profunda humildad a la omnipotente voluntad divina.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    La Virgen Inmaculada ha dado su asentimiento. El Arcángel ha desaparecido.
                    Dios se ha revestido de una naturaleza creada; la voluntad eterna está cumplida y
                    la creación completa. El Verbo se ha hecho carne, y aunque todavía invisible para el mundo,
                    habita ya entre los hombres que su inmenso amor ha venido a rescatar.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia2;