import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia3: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 3 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Así había comenzado su vida encarnada el Niño Jesús.
                    Consideremos el alma gloriosa y el Santo Cuerpo que había tomado,
                    adorándolos profundamente.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Admirando en primer lugar el alma de ese divino Niño, consideremos
                    en ella la plenitud de su ciencia beatífica, por la cual desde el primer
                    momento de su vida vio la divina esencia más claramente que todos
                    los ángeles y leyó lo pasado y lo porvenir con todos sus arcanos y
                    conocimientos.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Del alma del Niño Jesús pasamos ahora a su cuerpo, que era un
                    mundo de maravillas, una obra maestra de la mano de Dios. Quiso
                    que fuese pequeño y débil como el de todos los niños y sujeto a
                    todas las incomodidades de la infancia, para asemejarse más a
                    nosotros y participar en nuestras humillaciones.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    La belleza de este cuerpo del Divino Niño fue superior a cuanto se
                    ha imaginado jamás, y la divina sangre que por sus venas empezó a
                    circular desde el momento de su Encarnación, es la que lavó todas
                    las manchas del mundo culpable.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Pidámosle que lave las nuestras en el sacramento de la penitencia
                    para que el día de su dichosa Navidad nos encuentre purificados,
                    perdonados y dispuestos a recibirle con amor y provecho espiritual.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia3;