import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { cancion, Lista_Canciones } from "../../components/music/Data";
import { useContext } from "react";
import { PlayerContext } from "../../contexts/PlayerContextProvider";

const DisplayAlbum = () => {
    const { id_lista } = useParams();
    const albumId = id_lista ?? ""; 
    const album = Lista_Canciones.find((album) => album.id_lista === id_lista);
    let canciones = [];

    if (id_lista === '6') {
        canciones = cancion;
    } else {
        canciones = cancion.filter((cancion) => cancion.genero === album?.tematica);
    }

    const context = useContext(PlayerContext);

    if (!context) {
        throw new Error("DisplayAlbum debe estar dentro de un <PlayerContextProvider>");
    }

    const { playWithId } = context;

    return (
        <>
            <NavBar />
            <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
                <img className="w-[300px] h-[300px] object-cover rounded-xl" src={album?.image} alt="" />
                <div className="flex flex-col">
                    <p>PlayList</p>
                    <h2 className="text-5xl font-bold mb-10 md:text-7xl">{album?.nombre}</h2>
                    <h4 className="text-2xl font-semibold mb-10 md:text-3xl">{album?.desc}</h4>
                    <p className="text-2xl font-semibold md:text-2xl">{canciones.length} canciones</p>
                </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-4 mt-5 mb-4 pl-2 text-[#a7a7a7]">
                <p>
                    <b className="text-right mr-2 ml-4"> # </b>
                    Título
                </p>
                <p>Artista</p>
                <p>Género</p>
                <p>Duración</p>
            </div>
            <hr />
            {canciones.map((item, index) => (
                <div
                    onClick={() => playWithId(item.id_cancion,item.genero, albumId )} 
                    key={index}
                    className="grid grid-cols-4 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#1107072b] cursor-pointer"
                >
                    <div className="flex items-center min-w-[50px]">
                        <b className="w-6 text-right mr-4 text-[#a7a7a7]">{index + 1}</b>
                        <img className="w-10 h-10 mr-5 rounded-md" src={item.image} alt="" />
                        <p className="text-[#a7a7a7]">{item.nombre}</p>
                    </div>
                    <p>{item.artista}</p>
                    <p>{item.genero}</p>
                    <p className="text-[15px]">{item.duration}</p>
                </div>
            ))}
        </>
    );
};

export default DisplayAlbum;
