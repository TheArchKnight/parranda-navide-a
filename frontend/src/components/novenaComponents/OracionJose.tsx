import React from 'react';
import Jose from '../../assets/jose.jpg';

const OracionJose: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-brown-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-brown-900">
                    🙏 Oración a San José 🙏
                </h1>

                <img 
                    src={Jose} 
                    alt="San José" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-yellow-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-brown-800">
                    ¡Oh Santísimo San José! Esposo de María y padre adoptivo de Jesús.
                    Infinitas gracias doy a Dios porque te escogió para tan altos ministerios 
                    y te adornó con todos los dones proporcionados a tan excelente grandeza. 
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-brown-800">
                    Te ruego, por el amor que tuviste al Divino Niño, me abrases en fervorosos deseos 
                    de verle y recibirle sacramentalmente, mientras en su divina esencia le veo y le 
                    gozo en el cielo. Amén.
                </p>

                <p className="text-sm text-yellow-700 font-semibold mt-4">
                    (Se reza el Padrenuestro, el Avemaría y el Gloria al Padre).
                </p>
            </div>
        </div>
    );
};

export default OracionJose;
