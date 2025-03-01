import React from "react";
import campanaGif from "../../assets/Campana.gif"; // Asegúrate de que la ruta sea correcta

const VillancicoCampana: React.FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full text-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-start p-8">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-purple-700">
          🎶 Villancico - Campana sobre Campana 🎶
        </h1>

        <img 
          src={campanaGif} 
          alt="Campana sobre Campana" 
          className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-purple-600"
          width={300} 
          height={400} 
        />

        <button 
          className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all
                     hover:bg-purple-700 active:scale-95"
        >
          ▶ Reproducir Villancico
        </button>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Campana sobre campana, y sobre campana una. <br />
          Asómate a la ventana, verás al niño en la cuna. <br />
          Belén, campanas de Belén, <br />
          que los ángeles tocan, ¿qué nuevas me traéis? <br />
        </p>
        
        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Recogido tu rebaño, ¿a dónde vas, pastorcito? <br />
          Voy a llevar al portal requesón, manteca y vino. <br />
          Belén, campanas de Belén, <br />
          que los ángeles tocan, ¿qué nuevas me traéis? <br />
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Campana sobre campana, y sobre campana dos. <br />
          Asómate a la ventana porque está naciendo Dios. <br />
          Belén, campanas de Belén, <br />
          que los ángeles tocan, ¿qué nuevas me traéis? <br />
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Caminando a medianoche, ¿dónde va? Mira al pastor. <br />
          De llevarme iré a cuidarte, como Dios mi corazón. <br />
          Belén, campanas de Belén, <br />
          que los ángeles tocan, ¿qué nuevas me traéis? <br />
        </p>
      </div>
    </div>
  );
};

export default VillancicoCampana;