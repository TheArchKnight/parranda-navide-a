import React from 'react';
import Jesus from '../../assets/jesus.jpg';

const OracionJesus: React.FC = () => {
    return (
        <div className="flex flex-1 items-center justify-center w-full h-full text-yellow-700">
            <div className="w-full h-full flex flex-col items-center justify-start p-8">
                
                <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-yellow-600">
                    🙏 Oración al Niño Jesús 🙏
                </h1>

                <img 
                    src={Jesus} 
                    alt="Niño Jesús" 
                    className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-yellow-500"
                    width={300} 
                    height={400} 
                />

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-yellow-700">
                    ¡Acordaos, oh dulcísimo Niño Jesús, que dijisteis a la Venerable Margarita
                    del Santísimo Sacramento y en persona suya a todos vuestros devotos, estas
                    palabras tan consoladoras para nuestra pobre humanidad agobiada y doliente:
                </p>

                <p className="text-xl font-semibold text-yellow-600 text-center mt-4">
                    "Todo lo que quieras pedir, pídelo por los méritos de mi infancia y nada
                    te será negado!"
                </p>

                <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-yellow-700">
                    Llenos de confianza en Vos, oh Jesús, que sois la misma verdad, venimos a
                    exponeros toda nuestra miseria. Ayudadnos a llevar una vida santa para
                    conseguir una eternidad bienaventurada. Concédenos por los méritos infinitos
                    de vuestra infancia la gracia de la cual necesitamos tanto. Amén.
                </p>
            </div>
        </div>
    );
};

export default OracionJesus;