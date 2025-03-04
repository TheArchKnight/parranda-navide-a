import { Route, Routes } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";

const Display = () => {
    return (
        <>
            <div className="w-full h-full  p-3 pt-2 rounded bg-gray text-black lg:w-[100%] lg:ml-0"> 
            <Routes>
                <Route path="*" element={<DisplayHome/>} />
                <Route path="/album/:id_lista" element={
                        <DisplayAlbum/>
                    } />
                </Routes>
            </div>
        </>
        
    )
}
export default Display;