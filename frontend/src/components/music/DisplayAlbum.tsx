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
                <img className="w-[300px] h-[300px] ml-2 object-cover rounded-xl" src={album?.image} alt="" />
                <div className="flex flex-col max-w-[300px] ">
                    <p className="text-sm md:text-base">Playlist</p>
                    <h2 className="text-4xl font-bold mb-6 md:text-5xl">{album?.nombre}</h2>
                    <h4 className="text-lg md:text-xl font-semibold mb-6">{album?.desc}</h4>
                    <p className="text-lg md:text-xl font-semibold">{canciones.length} canciones</p>
                </div>
            </div>
            <hr className="p-2 "/>

            <div className="hidden lg:grid grid-cols-4 sm:grid-cols-4 mb-2 text-[#706c6c]">
                <p>
                    <b className="text-center mr-4 ml-2"> # </b>
                    Título
                </p>
                <p>Artista</p>
                <p>Género</p>
                <p>Duración</p>
            </div>
            
            {canciones.map((item, index) => (
            <div
                onClick={() => playWithId(item.id_cancion, item.genero, albumId)} 
                key={index}
                className="flex flex-col lg:grid lg:grid-cols-4 gap-2 p-2 items-center text-[#474242] lg:hover:bg-[#1107072b] cursor-pointer rounded-md last:mb-5"
            >
                {/* 📌 Versión móvil y tablet: Imagen + Nombre + Artista debajo */}
                <div className="flex items-center w-full lg:hidden">
                    <img className="w-12 h-12 mr-4 rounded-md" src={item.image} alt={item.nombre} />
                    <div className="flex flex-col">
                        <p className="text-base">{item.nombre}</p>
                        <p className="text-sm text-[#706c6c]">{item.artista}</p>
                    </div>
                </div>

                {/* 📌 Versión escritorio: Índice + Imagen + Nombre */}
                <div className="hidden lg:flex items-center">
                    <b className="w-6 text-center mr-2">{index + 1}</b>
                    <img className="w-10 h-10 mr-4 rounded-md" src={item.image} alt={item.nombre} />
                    <p>{item.nombre}</p>
                </div>

                {/* 📌 Resto de columnas en escritorio */}
                <p className="hidden lg:block">{item.artista}</p>
                <p className="hidden lg:block">{item.genero}</p>
                <p className="hidden lg:block">{item.duration}</p>
            </div>
        ))}


        </>
    );
};

export default DisplayAlbum;
