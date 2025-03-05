import Display from "../components/music/Display";
import * as React from "react";
import Snowfall from "./Snowfall";

const Biblioteca: React.FC = () => {

    return (
        <>
            <div className="h-full overflow-y-auto">
                <Snowfall />
                <Display />
            </div>
        </>
    );
};

export default Biblioteca;
