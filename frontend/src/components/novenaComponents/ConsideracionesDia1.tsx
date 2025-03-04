import React from 'react';
import Biblia from '../../assets/Biblia.gif';

const ConsideracionesDia1: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-gray-800">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-gray-900">
                    📖 Consideraciones - Día 1 📖
                </h1>

                <img 
                    src={Biblia} 
                    alt="Biblia" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-gray-600"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    En el principio de los tiempos el Verbo reposaba en el seno de su Padre en lo
                    más alto de los cielos: allí era la causa, a la par que el modelo de toda creación.
                    En esas profundidades de una incalculable eternidad permanecía el Niño de Belén.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    La vida del Verbo Eterno en el seno de su Padre era una vida maravillosa y sin embargo,
                    misterio sublime, busca otra morada en una mansión creada. No era porque en su mansión
                    eterna faltase algo a su infinita felicidad sino porque su misericordia infinita anhelaba
                    la redención y la salvación del género humano, que sin Él no podría verificarse.
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-gray-800">
                    Era necesario en las miras de su amor que tomase la forma, las debilidades e ignorancia
                    sistemática del hombre, que creciese para darle crecimiento espiritual; que sufriese, para morir
                    a sus pasiones y a su orgullo y por eso el Verbo Eterno ardiendo en deseos de salvar
                    al hombre resolvió hacerse hombre también y así redimir al culpable.
                </p>
            </div>
        </div>
    );
};

export default ConsideracionesDia1;