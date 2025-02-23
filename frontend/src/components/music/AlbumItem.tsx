import * as React from "react";
import { useNavigate } from "react-router-dom";


interface AlbumItemProps {
    image: string;
    nombre: string;
    id_lista: string;
}


const AlbumItem: React.FC<AlbumItemProps> = ({image, nombre, id_lista}) => {

    const navegateToAlbum = useNavigate();
    return (
        <div onClick={()=>navegateToAlbum(`/album/${id_lista}`)} className="min-w-[180px] p-2 px-3 rounded-xl cursor-pointer hover:bg-amber-500">
            <img className="rounded-xl" src={image} alt=""/>
            <p className="font-bold text-lg mt-2 mb-1">{nombre}</p>
        </div>
    )
}
export default AlbumItem;