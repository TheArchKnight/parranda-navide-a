import React from "react";
import nanitaGif from "../../assets/Nanita.gif"; // Asegúrate de que la ruta sea correcta
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";

const VillancicoNanita: React.FC = () => {
  const context = useContext(PlayerContext);
  
      if (!context) {
          throw new Error("DisplayAlbum debe estar dentro de un <PlayerContextProvider>");
      }
  
      const { playWithId } = context;
  return (
    <div className="flex flex-1 items-center justify-center w-full h-full text-purple-600">
      <div className="w-full h-full flex flex-col items-center justify-start p-8">
        
        <h1 className="text-5xl font-extrabold drop-shadow-md flex items-center gap-2 text-purple-700">
          🎶 Villancico - A la Nanita Nana 🎶
        </h1>

        <img 
          src={nanitaGif} 
          alt="A la Nanita Nana" 
          className="rounded-lg shadow-md transition-all transform hover:scale-105 mt-6 border-4 border-purple-600"
          width={300} 
          height={400} 
        />

        <button onClick={() => playWithId(2, "Villancicos-Tropicales", "5")}
          className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg font-semibold rounded-lg shadow-md transition-all
                     hover:bg-purple-700 active:scale-95"
        >
          ▶ Reproducir Villancico
        </button>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          A la nanita, nana, nanita, nana, nanita ea. <br />
          Mi Jesús tiene sueño, bendito sea, bendito sea. <br />
          A la nanita, nana, nanita, nana, nanita ea. <br />
          Mi Jesús tiene sueño, bendito sea, bendito sea.
        </p>
        
        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Fuentecilla que corres, clara y sonora. <br />
          Ruiseñor que en la selva cantando llora. <br />
          Calla mientras la cuna se balancea. <br />
          A la nanita, nana, nanita ea.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          Pimpollo de canela, lirio en capullo. <br />
          Duérmete, sin recelo, mientras te arrullo. <br />
          Duérmete que del alma mi canto brota. <br />
          Y un delirio de amores es cada nota.
        </p>

        <p className="text-xl leading-relaxed mt-6 max-w-2xl text-center text-purple-700">
          A la nanita, nana, nanita, nana, nanita ea. <br />
          Mi Jesús tiene sueño, bendito sea, bendito sea. <br />
          A la nanita, nana, nanita, nana, nanita ea. <br />
          Mi Jesús tiene sueño, bendito sea, bendito sea.
        </p>
      </div>
    </div>
  );
};

export default VillancicoNanita;