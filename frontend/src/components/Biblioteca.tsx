import Player from "../components/music/Player";
import Display from "../components/music/Display";
import * as React from "react";

const Biblioteca: React.FC = () => {

    return (
        <>
            <div className="h-full overflow-y-auto">
            <Display />
            </div>
        </>
    );
};

export default Biblioteca;
