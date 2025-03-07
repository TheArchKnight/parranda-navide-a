import NavBar from "./NavBar";
import { Lista_Canciones } from "./Data";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
    return (
        <> 
            <NavBar />
            <div className="mb-4 pt-20">
                <h1 className="px-2 font-bold text-red-500 text-2xl md:text-3xl lg:text-4xl">
                    Álbumes
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {Lista_Canciones.map((item, index) => (
                        <AlbumItem key={index} image={item.image} nombre={item.nombre} id_lista={item.id_lista} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default DisplayHome;
