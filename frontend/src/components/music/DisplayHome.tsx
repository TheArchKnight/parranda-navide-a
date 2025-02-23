import NavBar from "./NavBar";
import {Lista_Canciones} from "./Data";
import AlbumItem from "./AlbumItem";

const DisplayHome = () => {
    return (
        <> 
            <NavBar/>
            <div className="mb-4">
                <h1 className="my-5 font-bold text-red-500 text-2xl">Albumes</h1>
                <div className="grid grid-cols-3 gap-4 text-2xl text-red-500 cursor-pointer">
                    {Lista_Canciones.map((item,index) => (<AlbumItem key={index} image={item.image} nombre={item.nombre} id_lista={item.id_lista}/>))}
                </div>
            </div>
            <div>
            </div>
        </>
    )
}
export default DisplayHome;