import Player from "../components/music/Player";
import Display from "../components/music/Display";
import * as React from "react";
import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContextProvider";


const Biblioteca: React.FC = () => {
    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("Biblioteca debe estar dentro de un <PlayerContextProvider>");
    }

    const { audioRef, track } = context;

    return (
        <>
            <div className="h-screen bg-white">
                <div className="h-[90%] flex">
                    <Display />
                </div>
                <Player />
                <audio ref={audioRef} src={track.file} preload="auto"></audio>
            </div>
        </>
    );
};

export default Biblioteca;
