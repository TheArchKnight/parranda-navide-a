import React from "react";
import pezGIF from "../../assets/Pez.gif";

const VillancicoPeces: React.FC = () => {
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full text-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-start p-8">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-purple-700">
          🎶 Villancico - Los Peces en el Río 🎶
        </h1>

        <img 
          src={pezGIF} 
          alt="Los Peces en el Río" 
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
          Pero mira como beben los peces en el río. <br />
          Pero mira como beben por ver a Dios nacido. <br />
          Beben y beben y vuelven a beber. <br />
          Los peces en el río por ver a Dios nacer.
        </p>
        
        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          La virgen se está peinando, entre cortina y cortina. <br />
          Sus cabellos son de oro y el peine de plata fina. <br />
          Pero mira como beben los peces en el río. <br />
          Pero mira como beben por ver a Dios nacido.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Pero mira como beben los peces en el río. <br />
          Pero mira como beben por ver a Dios nacido. <br />
          Beben y beben y vuelven a beber. <br />
          Los peces en el río por ver a Dios nacer.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          La virgen lava pañales y los tiende en el romero. <br />
          Los pajarillos cantando y el romero floreciendo. <br />
          Pero mira como beben los peces en el río. <br />
          Pero mira como beben por ver a Dios nacido.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Pero mira como beben los peces en el río. <br />
          Pero mira como beben por ver a Dios nacido. <br />
          Beben y beben y vuelven a beber. <br />
          Los peces en el río por ver a Dios nacer.
        </p>
      </div>
    </div>
  );
};

export default VillancicoPeces;