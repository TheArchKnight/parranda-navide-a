import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia4: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 4 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Desde el seno de su Madre comenzó el Niño Jesús a poner en práctica 
                    su eterna sumisión a Dios, que continuó sin la menor interrupción durante toda su vida. 
                    Adoraba a su Eterno Padre, le amaba, se sometía a su voluntad; aceptaba con resignación 
                    toda su debilidad, toda su humillación, todas sus incomodidades.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    ¿Quién de nosotros quisiera retroceder a un estado semejante con el pleno goce de la razón 
                    y de la reflexión? Por ahí entró el Divino Niño en su dolorosa y humillante carrera; 
                    así empezó a anonadarse delante de su Padre; a enseñarnos lo que Dios merece por parte 
                    de su criatura; a expiar nuestro orgullo, origen de todos nuestros pecados.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    ¿Deseamos hacer una verdadera oración? Empecemos por formarnos de ella una exacta idea, 
                    contemplando al Niño en el seno de su Madre. El Divino Niño ora y ora del modo más excelente. 
                    No habla, no medita, ni se deshace en tiernos efectos. Su mismo estado, lo acepta con la intención 
                    de honrar a Dios, en su oración y en ese estado expresa altamente todo lo que Dios merece, 
                    y de qué modo quiere ser adorado por nosotros.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Unámonos a las adoraciones del Niño Dios en el seno de María; unámonos a su profundo 
                    abatimiento, y sea éste el primer efecto de nuestro sacrificio a Dios. 
                    Desaparezcamos a nuestros propios ojos, y que Dios sea todo para nosotros.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia4;