import { createContext, useRef, useState, ReactNode, useEffect } from "react";
import { cancion, Lista_Canciones } from "../components/music/Data";

interface Track {
    id_cancion: number;
    nombre: string;
    artista: string;
    file: string;
    image: string;
    genero: string;
    id_lista :string;
}

interface Time {
    currentTime: {
        minutes: number;
        seconds: number;
    };
    totalTime: {
        minutes: number;
        seconds: number;
    };
}

export interface PlayerContextType {
    audioRef: React.RefObject<HTMLAudioElement | null>;
    seekBg: React.RefObject<HTMLDivElement | null>;
    seekBar: React.RefObject<HTMLHRElement | null>;
    track: Track;
    setTrack: (track: Track) => void;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    time: Time;
    setTime: (time: Time) => void;
    play: () => void;
    pause: () => void;
    cancionPrevia: () => void;
    cancionSiguiente: () => void;
    seekCancion: (e: any) => void;
    playWithId: (id_cancion: number, genero: string,id_lista:string) => void;
    toggleShuffle: () => void;
    isShuffle: boolean;
}

export const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

interface PlayerContextProviderProps {
    children: ReactNode;
}

const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const seekBg = useRef<HTMLDivElement | null>(null);
    const seekBar = useRef<HTMLHRElement | null>(null);

    // Estado para modo aleatorio
    const [isShuffle, setIsShuffle] = useState<boolean>(false);
    // Cola aleatoria: lista de tuplas { id_cancion, genero }

    const [track, setTrack] = useState<Track>({
        id_cancion: cancion[0].id_cancion,
        nombre: cancion[0].nombre,
        artista: cancion[0].artista.join(", "),
        file: cancion[0].url_audio,
        image: cancion[0].image,
        genero: cancion[0].genero,
        id_lista: Lista_Canciones.find(album => album.tematica === cancion[0].genero)?.id_lista || ""
    });

    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [time, setTime] = useState<Time>({
        currentTime: { minutes: 0, seconds: 0 },
        totalTime: { minutes: 0, seconds: 0 }
    });

    const play = () => {
        if (audioRef.current) {
            audioRef.current.play().catch(error => console.error("Error al reproducir:", error));
            setIsPlaying(true);
        }
    };

    const pause = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleShuffle = () => {
        setIsShuffle(prev => !prev);
    };
    
    const getRandomSong = () => {
        let cancionesDisponibles = [];
    
        if (track.id_lista === "6") {
            // 🎵 Si estamos en "Radio-Navideña", permitimos elegir cualquier canción de toda la lista
            cancionesDisponibles = cancion.filter(song => song.id_cancion !== track.id_cancion);
        } else {
            // 🎵 Si estamos en otro álbum, solo se eligen canciones del mismo género (álbum específico)
            cancionesDisponibles = cancion.filter(song => song.genero === track.genero && song.id_cancion !== track.id_cancion);
        }
    
        if (cancionesDisponibles.length === 0) {
            console.error("No hay canciones disponibles para reproducción aleatoria.");
            return null;
        }
    
        // Seleccionar una canción aleatoria
        const randomIndex = Math.floor(Math.random() * cancionesDisponibles.length);
        const randomSong = cancionesDisponibles[randomIndex];
    
        // 🔥 Mantenemos el mismo `id_lista` del track actual
        return {
            ...randomSong,
            id_lista: track.id_lista,
        };
    };
    
    
    

    const playWithId = async (id_cancion: number, genero: string, id_lista: string) => {
        console.log("ALBUM: " + id_lista);

        const song = cancion.find(song => song.id_cancion === id_cancion && song.genero === genero);
        if (!song) {
            console.error("Canción no encontrada");
            return;
        }
    
        const trackData: Track = {
            id_cancion: song.id_cancion,
            nombre: song.nombre,
            artista: song.artista.join(", "),
            file: song.url_audio,
            image: song.image,
            genero: song.genero,
            id_lista: id_lista
        };
    
        setTrack(trackData);
    
        setTimeout(async () => {
            if (audioRef.current) {
                try {
                    await audioRef.current.play();
                    setIsPlaying(true);
                } catch (error) {
                    console.error("Error al reproducir:", error);
                }
            }
        }, 0);
    };

    const generosOrdenados = [
        "Chucu-Chucu",
        "Cumbia-Navideña",
        "Salsa-Navideña",
        "Vallenato-Navideño",
        "Villancicos-Tropicales",
        "Radio-Navideña"
    ];
    
    const cancionSiguiente = async () => {
        if (isShuffle) {
            const nextSong = getRandomSong();
            if (nextSong) {
                playWithId(nextSong.id_cancion, nextSong.genero, track.id_lista);  // 🔹 Mantiene id_lista = "6"
            }
            return;
        }
    
        const albumSongs = cancion.filter(song => song.genero === track.genero);
        const currentIndex = albumSongs.findIndex(song => song.id_cancion === track.id_cancion);
    
        if (currentIndex < albumSongs.length - 1) {
            // 🔹 Si hay más canciones en el álbum, reproducir la siguiente sin cambiar el id_lista
            playWithId(albumSongs[currentIndex + 1].id_cancion, albumSongs[currentIndex + 1].genero, track.id_lista);
        } else {
            // 🔹 Pasar al siguiente álbum en orden, pero mantener el id_lista = "6" si es Radio-Navideña
            const currentGenreIndex = generosOrdenados.indexOf(track.genero);
            const nextGenreIndex = (currentGenreIndex + 1) % generosOrdenados.length;
            const nextGenre = generosOrdenados[nextGenreIndex];
    
            console.log("Cambiando al siguiente género: " + nextGenre);
    
            const nextGenreSongs = cancion.filter(song => song.genero === nextGenre);
    
            if (nextGenreSongs.length > 0) {
                // 🔹 Si estamos en "Radio-Navideña", mantenemos el id_lista en "6"
                const newIdLista = track.id_lista === "6" ? "6" : Lista_Canciones.find(album => album.tematica === nextGenre)?.id_lista || "6";
    
                playWithId(nextGenreSongs[0].id_cancion, nextGenreSongs[0].genero, newIdLista);
            } else {
                console.error("No hay canciones en el género siguiente.");
            }
        }
    };
    
    
    const cancionPrevia = async () => {
        if (isShuffle) {
            const prevSong = getRandomSong();
            if (prevSong) {
                playWithId(prevSong.id_cancion, prevSong.genero, track.id_lista);  // 🔹 Mantiene id_lista = "6"
            }
            return;
        }
    
        const albumSongs = cancion.filter(song => song.genero === track.genero);
        const currentIndex = albumSongs.findIndex(song => song.id_cancion === track.id_cancion);
    
        if (currentIndex > 0) {
            // 🔹 Si hay una canción anterior en el mismo álbum, reproducirla sin cambiar el id_lista
            playWithId(albumSongs[currentIndex - 1].id_cancion, albumSongs[currentIndex - 1].genero, track.id_lista);
        } else {
            // 🔹 Pasar al álbum anterior en orden, pero mantener el id_lista = "6" si es Radio-Navideña
            const currentGenreIndex = generosOrdenados.indexOf(track.genero);
            const prevGenreIndex = (currentGenreIndex - 1 + generosOrdenados.length) % generosOrdenados.length;
            const prevGenre = generosOrdenados[prevGenreIndex];
    
            console.log("Cambiando al género anterior: " + prevGenre);
    
            const prevGenreSongs = cancion.filter(song => song.genero === prevGenre);
    
            if (prevGenreSongs.length > 0) {
                // 🔹 Si estamos en "Radio-Navideña", mantenemos el id_lista en "6"
                const newIdLista = track.id_lista === "6" ? "6" : Lista_Canciones.find(album => album.tematica === prevGenre)?.id_lista || "6";
    
                playWithId(prevGenreSongs[prevGenreSongs.length - 1].id_cancion, prevGenreSongs[prevGenreSongs.length - 1].genero, newIdLista);
            } else {
                console.error("No hay canciones en el género anterior.");
            }
        }
    };
    
    
    
    
    

    const seekCancion = async (e: any) => {
        if (audioRef.current && seekBg.current) {
            const clickPosition = e.nativeEvent.offsetX;
            const seekWidth = seekBg.current.offsetWidth;
            const duration = audioRef.current.duration;

            if (duration > 0) {
                audioRef.current.currentTime = (clickPosition / seekWidth) * duration;
            }
        }
    };

    useEffect(() => {
        const updateTime = () => {
            if (audioRef.current && seekBar.current) {
                const currentTime = audioRef.current.currentTime;
                const duration = audioRef.current.duration || 1;

                seekBar.current.style.width = `${(currentTime / duration) * 100}%`;

                setTime({
                    currentTime: {
                        minutes: Math.floor(currentTime / 60),
                        seconds: Math.floor(currentTime % 60)
                    },
                    totalTime: {
                        minutes: Math.floor(duration / 60),
                        seconds: Math.floor(duration % 60)
                    }
                });
            }
        };

        const handleSongEnd = async () => {
            if (audioRef.current?.ended) {
                await cancionSiguiente();
            }
        };

        if (audioRef.current) {
            audioRef.current.ontimeupdate = updateTime;
            audioRef.current.onended = handleSongEnd;
        }

        return () => {
            if (audioRef.current) {
                audioRef.current.ontimeupdate = null;
                audioRef.current.onended = null;
            }
        };
    }, [audioRef, cancionSiguiente]);

    const contextValue = {
        audioRef,
        seekBg,
        seekBar,
        track,
        setTrack,
        isPlaying,
        setIsPlaying,
        time,
        setTime,
        play,
        pause,
        playWithId,
        cancionPrevia,
        cancionSiguiente,
        seekCancion,
        toggleShuffle,
        isShuffle
    };

    return (
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
    );
};

export default PlayerContextProvider;
