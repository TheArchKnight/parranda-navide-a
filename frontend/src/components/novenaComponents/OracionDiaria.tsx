import React from 'react';
import Rezando from '../../assets/Rezando.gif';

const OracionDiaria: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-red-700">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-red-800">
                    🙏 Oración de Todos los Días 🙏
                </h1>

                <img 
                    src={Rezando} 
                    alt="Rezando" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-red-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    Benignísimo Dios de infinita caridad, que tanto amasteis a los hombres, que les disteis en vuestro
                    Hijo la mejor prenda de vuestro amor para que hecho hombre en las entrañas de una Virgen,
                    naciese en un pesebre para nuestra salud y remedio. Yo, en nombre de todos los mortales, os
                    doy infinitas gracias por tan soberano beneficio.
                </p>
                
                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center">
                    En torno a él os ofrezco la pobreza, humildad y demás virtudes de vuestro hijo humanado;
                    suplicándoos por sus divinos méritos, por las incomodidades con que nació y por las tiernas
                    lágrimas que derramó en su pesebre, que dispongáis nuestros corazones con humildad profunda,
                    con amor encendido, con total desprecio de todo lo terreno, para que Jesús recién nacido tenga en
                    ellos su cuna y more eternamente. Amén.
                </p>
                
                <p className="text-sm text-red-600 mt-4 font-semibold">(Se reza tres veces el Gloria al Padre)</p>
            </div>
        </div>
    );
};

export default OracionDiaria;