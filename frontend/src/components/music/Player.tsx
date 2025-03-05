import { useContext } from "react";
import { icons } from "../music/Data";
import { PlayerContext } from "../../contexts/PlayerContextProvider";

const Player = () => {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("Player debe estar dentro de un <PlayerContextProvider>");
    }

    const { track, seekBg, seekBar, isPlaying, play, pause, time, cancionPrevia, cancionSiguiente, seekCancion, toggleShuffle, isShuffle } = context;

    return (
            <div className="fixed bottom-0 left-0 w-full h-[10vh] min-h-[10vh] bg-red-500 text-white p-2 flex flex-col items-center md:flex-row md:justify-center md:gap-6 overflow-hidden">

            {/* 📌 Sección: Imagen y Detalles de la Canción */}
            <div className="flex items-center gap-2 w-full md:w-auto min-w-0 flex-shrink-0">
                <img className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-md object-cover" src={track.image} alt="Cover" />
                <div className="flex flex-col truncate w-24 md:w-32 lg:w-40">
                    <p className="text-xs md:text-sm font-semibold truncate">{track.nombre}</p>
                    <span className="text-[10px] md:text-xs text-gray-200 truncate">{track.artista}</span>
                </div>
            </div>

            {/* 📌 Sección: Controles de Reproducción */}
            <div className="flex flex-col items-center gap-1 md:gap-2">
                <div className="flex gap-3 md:gap-4">
                    {/* 🔀 Shuffle con color personalizado */}
                    <img
                        className="w-4 md:w-5 cursor-pointer transition duration-200"
                        src={icons.shuffle}
                        alt="Shuffle"
                        onClick={toggleShuffle}
                        style={{
                            filter: isShuffle
                                ? "invert(18%) sepia(94%) saturate(7500%) hue-rotate(-10deg) brightness(90%) contrast(150%)"
                                : "none"
                        }}
                    />
                    {/* ⏮️ Anterior */}
                    <img onClick={cancionPrevia} className="w-4 md:w-5 cursor-pointer" src={icons.prev} alt="Anterior" />
                    
                    {/* ▶️ / ⏸️ Play / Pause */}
                    {isPlaying ? (
                        <img onClick={pause} className="w-5 md:w-6 cursor-pointer" src={icons.pause} alt="Pausa" />
                    ) : (
                        <img onClick={play} className="w-5 md:w-6 cursor-pointer" src={icons.play} alt="Play" />
                    )}
                    
                    {/* ⏭️ Siguiente */}
                    <img onClick={cancionSiguiente} className="w-4 md:w-5 cursor-pointer" src={icons.next} alt="Siguiente" />
                </div>

                {/* 📌 Sección: Barra de Progreso */}
                <div className="flex items-center gap-2 w-full px-2 justify-center">
                    <p className="text-[10px] md:text-xs">{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                    
                    <div 
                        ref={seekBg} 
                        onClick={seekCancion} 
                        className="w-[70vw] md:w-[50vw] lg:w-[40vw] max-w-[400px] h-1 md:h-1.5 bg-gray-400 rounded-full cursor-pointer relative"
                    >
                        <hr 
                            ref={seekBar as React.RefObject<HTMLHRElement>} 
                            className="h-1 md:h-1.5 border-none w-0 bg-amber-500 rounded-full transition-all duration-200"
                        />
                    </div>

                    <p className="text-[10px] md:text-xs">{time.totalTime.minutes}:{time.totalTime.seconds}</p>
                </div>
            </div>
        </div>
    );
};

export default Player;
