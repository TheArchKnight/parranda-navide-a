import Player from "../components/music/Player";
import Display from "../components/music/Display";
import * as React from "react";

const Biblioteca: React.FC = () => {

    return (
        <>
            <div className="h-screen bg-white">
                <div className="h-[90%] flex">
                    <Display />
                </div>
                <Player />
            </div>
        </>
    );
};

export default Biblioteca;
