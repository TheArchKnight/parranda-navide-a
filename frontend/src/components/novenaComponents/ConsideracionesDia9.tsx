import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia9: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    🌟 Consideraciones - Día 9 🌟
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    La noche ha cerrado del todo en las campiñas de Belén. Desechados por los hombres y viéndose 
                    sin abrigo, María y José han salido de la inhospitalaria población y se han refugiado en una 
                    gruta al pie de la colina. Junto a ellos, el jumento que llevó a la reina de los ángeles y un 
                    manso buey, dejado allí probablemente por algún caminante.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    El Divino Niño, desconocido por sus criaturas racionales, recibe el calor del aliento de estos 
                    humildes animales, que le ofrecen el respeto y la adoración que le ha negado Belén. La tenue 
                    luz de la linterna que José sostiene ilumina el pobre pesebre lleno de paja, símbolo de las 
                    maravillas del altar y de la unión eucarística que Jesús establecerá con los hombres.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    María, en oración, espera en la gruta el momento divino. Las horas transcurren en un silencio 
                    lleno de misterio. Pero a la medianoche, el milagro acontece. En el pesebre, antes vacío, ha 
                    aparecido el Niño Dios, esperado y anhelado durante cuatro mil años. Su Santísima Madre se 
                    postra en adoración, y José le rinde homenaje, iniciando su sagrado oficio de padre adoptivo 
                    del Redentor.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Ángeles descienden del cielo, inundando la noche con su canto: <strong>"¡Gloria in Excelsis!"</strong>, eco de la 
                    adoración celestial. Guiados por su llamado, los pastores acuden presurosos, llevando sus 
                    humildes ofrendas. En Oriente, la estrella de Jacob resplandece, y la caravana de los Reyes 
                    Magos inicia su viaje para depositar a los pies del Niño oro, incienso y mirra, símbolos de 
                    la caridad, la adoración y la mortificación.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800 font-semibold">
                    ¡Oh adorado Niño! Nosotros también, que hemos hecho esta novena para prepararnos para tu 
                    nacimiento, te ofrecemos nuestra humilde adoración. ¡No la rechaces! Ven a nuestras almas, 
                    ven a nuestros corazones llenos de amor. Enciende en ellos una devoción a tu santa infancia 
                    que no sea pasajera, sino constante, para que nos guíe a la vida eterna, nos libre del pecado 
                    y siembre en nosotros las virtudes cristianas.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia9;