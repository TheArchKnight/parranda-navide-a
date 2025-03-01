
import {useContext} from "react";
import {icons} from "../music/Data";
import {PlayerContext} from "../../contexts/PlayerContextProvider";

const Player = () => {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("Player debe estar dentro de un <PlayerContextProvider>");
    }

    const { track, seekBg, seekBar, isPlaying, play, pause, time,cancionPrevia,cancionSiguiente, seekCancion, toggleShuffle,isShuffle } = context;

    return (
        <div className="h-[10%] bg-red-500 flex justify-between items-center text-white px-4">
            <div className="hidden lg:flex items-center gap-4">
                <img className="w-12" src ={track.image} alt=""/> 
                <div className="w-40 overflow-hidden truncate">
                    <p className="text-sm font-semibold truncate">{track.nombre}</p>
                    <span className="text-xs text-white truncate">{track.artista}</span>
                </div>

            </div>
            <div className="flex flex-col items-center gap-1 m-auto">
                <div className="flex gap-4">
                    <img
                        className="w-4 cursor-pointer transition duration-200"
                        src={icons.shuffle}
                        alt="Shuffle"
                        onClick={toggleShuffle}
                        style={{
                            filter: isShuffle
                                ? "invert(18%) sepia(94%) saturate(7500%) hue-rotate(-10deg) brightness(90%) contrast(150%)"
                                : "none"
                        }}
                    />
                    <img onClick={cancionPrevia} className="w-4 cursor-pointer" src= {icons.prev} alt=""/>
                    {
                    isPlaying ? <img onClick={pause} className="w-4 cursor-pointer" src= {icons.pause} alt=""/>
                    :<img onClick={play} className="w-4 cursor-pointer" src= {icons.play} alt=""/>
                    }   
                    <img onClick={cancionSiguiente} className="w-4 cursor-pointer" src= {icons.next} alt=""/>
                </div>
                <div className="flex items-center gap-5">
                    <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
                    <div ref={seekBg} onClick={seekCancion} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
                        <hr ref={seekBar as React.RefObject<HTMLHRElement>} className="h-1 border-none w-0 bg-amber-500 rounded-full"/>
                    </div>
                    <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
                </div>
            </div>
        </div>
    );
}
export default Player;