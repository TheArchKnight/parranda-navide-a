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
        <div className="fixed bottom-0 left-0 w-full bg-red-600 text-white p-3 flex flex-col items-center md:flex-row md:justify-center md:gap-6">
            
            {/* 📌 Sección: Imagen y Detalles de la Canción */}
            <div className="flex items-center gap-3 w-full md:w-auto">
                <img className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-md object-cover" src={track.image} alt="Cover" />
                <div className="flex flex-col truncate w-28 md:w-36 lg:w-40">
                    <p className="text-sm md:text-base font-semibold truncate">{track.nombre}</p>
                    <span className="text-xs md:text-sm text-gray-200 truncate">{track.artista}</span>
                </div>
            </div>

            {/* 📌 Sección: Controles de Reproducción */}
            <div className="flex flex-col items-center gap-2 mt-2 md:mt-0">
                <div className="flex gap-4">
                    {/* 🔀 Shuffle con color personalizado */}
                    <img
                        className="w-5 md:w-6 cursor-pointer transition duration-200"
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
                    <img onClick={cancionPrevia} className="w-5 md:w-6 cursor-pointer" src={icons.prev} alt="Anterior" />
                    
                    {/* ▶️ / ⏸️ Play / Pause */}
                    {isPlaying ? (
                        <img onClick={pause} className="w-6 md:w-7 cursor-pointer" src={icons.pause} alt="Pausa" />
                    ) : (
                        <img onClick={play} className="w-6 md:w-7 cursor-pointer" src={icons.play} alt="Play" />
                    )}
                    
                    {/* ⏭️ Siguiente */}
                    <img onClick={cancionSiguiente} className="w-5 md:w-6 cursor-pointer" src={icons.next} alt="Siguiente" />
                </div>

                {/* 📌 Sección: Barra de Progreso */}
                <div className="flex items-center gap-2 md:gap-3 w-full px-2 justify-center">
                    <p className="text-xs md:text-sm">{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                    
                    <div 
                        ref={seekBg} 
                        onClick={seekCancion} 
                        className="w-[75vw] md:w-[60vw] lg:w-[50vw] max-w-[500px] h-1.5 md:h-2 bg-gray-400 rounded-full cursor-pointer relative"
                    >
                        <hr 
                            ref={seekBar as React.RefObject<HTMLHRElement>} 
                            className="h-1.5 md:h-2 border-none w-0 bg-amber-500 rounded-full transition-all duration-200"
                        />
                    </div>

                    <p className="text-xs md:text-sm">{time.totalTime.minutes}:{time.totalTime.seconds}</p>
                </div>
            </div>
        </div>
    );
};

export default Player;
