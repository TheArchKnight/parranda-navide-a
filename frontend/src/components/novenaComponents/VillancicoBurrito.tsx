import React from "react";
import burritoGif from "../../assets/Burrito.gif"; // Asegúrate de que la ruta sea correcta
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";



const VillancicoBurrito: React.FC = () => {
  const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("DisplayAlbum debe estar dentro de un <PlayerContextProvider>");
    }

    const { playWithId } = context;
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full text-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-start p-8">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-purple-700">
          🎶 Villancico - Burrito Sabanero 🎶
        </h1>

        <img 
          src={burritoGif} 
          alt="Burrito" 
          className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-purple-600"
          width={300} 
          height={400} 
        />

        <button onClick={() => playWithId(1, "Villancicos-Tropicales", "5")}
          className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all
                     hover:bg-purple-700 active:scale-95"
        >
          ▶ Reproducir Villancico
        </button>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Con mi burrito sabanero, voy camino de Belén. <br />
          Con mi burrito sabanero, voy camino de Belén. <br />
          Si me ven, si me ven, voy camino de Belén. <br />
          Si me ven, si me ven, voy camino de Belén.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          El lucerito mañanero ilumina mi sendero. <br />
          El lucerito mañanero ilumina mi sendero. <br />
          Si me ven, si me ven, voy camino de Belén. <br />
          Si me ven, si me ven, voy camino de Belén.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Con mi cuatrico voy cantando, mi burrito va trotando. <br />
          Con mi cuatrico voy cantando, mi burrito va trotando. <br />
          Si me ven, si me ven, voy camino de Belén. <br />
          Si me ven, si me ven, voy camino de Belén.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Tuki tuki tuki tuki, tuki tuki tuki ta. <br />
          Apúrate, mi burrito, que ya vamos a llegar. <br />
          Tuki tuki tuki tuki, tuki tuki tuki tu. <br />
          Apúrate, mi burrito, vamos a ver a Jesús.
        </p>
      </div>
    </div>
  );
};

export default VillancicoBurrito;