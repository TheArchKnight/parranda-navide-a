import React from 'react';
import Maria from '../../assets/Maria.jpg';

const OracionMaria: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-blue-700">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-blue-900">
                    🙏 Oración a la Virgen María 🙏
                </h1>

                <img 
                    src={Maria} 
                    alt="Virgen María" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-blue-900"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-blue-600">
                    Soberana María, que por tus grandes virtudes y especialmente por tu humildad,
                    mereciste que todo un Dios te escogiera por madre suya, te suplico que tú misma
                    prepares y dispongas mi alma, y la de todos los que en este tiempo hagan esta
                    novena, para el nacimiento espiritual de tu adorado Hijo. 
                </p>
                
                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-blue-600">
                    ¡Oh dulcísima Madre! Comunícame algo del profundo recogimiento y divina ternura
                    con la que guardaste tú, para que nos hagas menos indignos de verle, amarle y
                    adorarle por toda la eternidad. Amén.
                </p>
                
                <p className="text-sm text-blue-900 mt-4 font-semibold">(Se reza tres veces el Avemaría)</p>
            </div>
        </div>
    );
};

export default OracionMaria;
