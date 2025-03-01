import React from "react";
import tutainaGif from "../../assets/Tutaina.gif";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";

const VillancicoTutaina: React.FC = () => {
  const context = useContext(PlayerContext);
  
      if (!context) {
          throw new Error("DisplayAlbum debe estar dentro de un <PlayerContextProvider>");
      }
  
      const { playWithId } = context;
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full text-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-start p-8">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-purple-700">
          🎶 Villancico - Tutaina 🎶
        </h1>

        <img 
          src={tutainaGif} 
          alt="Tutaina" 
          className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-purple-600"
          width={300} 
          height={400} 
        />

        <button onClick={() => playWithId(4, "Villancicos-Tropicales", "5")}
          className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all
                     hover:bg-purple-700 active:scale-95"
        >
          ▶ Reproducir Villancico
        </button>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Los pastores de Belén vienen a adorar al niño. <br />
          La virgen y San José los reciben con cariño. <br />
          Los pastores de Belén vienen a adorar al niño. <br />
          La virgen y San José los reciben con cariño.
        </p>
        
        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina. <br />
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Tres reyes vienen también con incienso, mirra y oro. <br />
          A ofrendar a Dios su bien con el más grande tesoro. <br />
          Tres reyes vienen también con incienso, mirra y oro. <br />
          A ofrendar a Dios su bien con el más grande tesoro.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina. <br />
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Vamos todos a cantar con amor y alegría. <br />
          Porque acaba de llegar de los cielos el Mesías. <br />
          Vamos todos a cantar con amor y alegría. <br />
          Porque acaba de llegar de los cielos el Mesías.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina. <br />
          Tutaina tuturuma, tutaina tuturumaina. <br />
          Tutaina tuturuma, turuma. <br />
          Tutaina tuturumaina.
        </p>
      </div>
    </div>
  );
};

export default VillancicoTutaina;