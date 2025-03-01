const cariñito = "/music/cariñito.mp3";
const elHijoDeTuta = "/music/El hijo de Tuta.mp3";
const elPolvorete = "/music/El Polvorete.mp3";
const laChicaGomela = "/music/La Chica Gomela.mp3";
const losSabanales = "/music/Los Sabanales.mp3";
const parrandaEnElCafetal = "/music/parranda en el cafetal.mp3";
const cantaresDeNavidad = "/music/Cantares de Navidad .mp3";
const añoNuevo = "/music/Año Nuevo.mp3";
const gritoVagabundo = "/music/Grito Vagabundo.mp3";
const elHijoAusente = "/music/El hijo ausente.mp3";
const laPolleraColorá = "/music/La Pollera Colorá.mp3";
const felizNocheBuena = "/music/Feliz NocheBuena.mp3";
const bombaEnNavidad = "/music/Bomba en Navidad.mp3";
const aireDeNavidad = "/music/Aire De Navidad.mp3";
const almaNavidena = "/music/almaNavidena.mp3";
const pedroNavaja = "/music/Pedro Navaja.mp3";
const amoresComoElNuestro = "/music/Amores Como el Nuestro.mp3";
const mensajeDeNavidad = "/music/Mensaje De Navidad.mp3";
const benditoDiciembre = "/music/bendito diciembre.mp3";
const veinticincoDeDiciembre = "/music/25 de diciembre.mp3";
const enEstasNavidades = "/music/en estas navidades.mp3";
const unOsitoDormilon = "/music/un osito dormilon.mp3";
const elBurritoDeBelén = "/music/El burrito de Belen.mp3";
const laNanitaNana = "/music/La Nanita Nana.mp3";
const anton = "/music/anton.mp3";
const tutaina = "/music/tutaina.mp3";
const campanaSobreCampana = "/music/Campana Sobre Campana.mp3";
const pecesEnElRio = "/music/peces en el rio.mp3"
const aguilaRoja = "/music/Aguila Roja.mp3"

/*
import cariñito from "../../assets/music/Cariñito.mp3";
import elHijoDeTuta from "../../assets/music/El hijo de Tuta.mp3";
import elPolvorete from "../../assets/music/El Polvorete.mp3";
import laChicaGomela from "../../assets/music/La Chica Gomela.mp3";
import losSabanales from "../../assets/music/Los Sabanales.mp3";
import parrandaEnElCafetal from "../../assets/music/parranda en el cafetal.mp3";
import cantaresDeNavidad from "../../assets/music/Cantares de Navidad .mp3";
import añoNuevo from "../../assets/music/Año Nuevo.mp3";
import gritoVagabundo from "../../assets/music/Grito Vagabundo.mp3";
import elHijoAusente from "../../assets/music/El hijo ausente.mp3";
import laPolleraColorá from "../../assets/music/La Pollera Colorá.mp3";
import felizNocheBuena from "../../assets/music/Feliz NocheBuena.mp3";
import bombaEnNavidad from "../../assets/music/Bomba en Navidad.mp3";
import aireDeNavidad from "../../assets/music/Aire De Navidad.mp3";
import almaNavidena from "../../assets/music/almaNavidena.mp3";
import pedroNavaja from "../../assets/music/Pedro Navaja.mp3";
import amoresComoElNuestro from "../../assets/music/Amores Como el Nuestro.mp3";
import mensajeDeNavidad from "../../assets/music/Mensaje De Navidad.mp3";
import benditoDiciembre from "../../assets/music/bendito diciembre.mp3";
import veinticincoDeDiciembre from "../../assets/music/25 de diciembre.mp3";
import enEstasNavidades from "../../assets/music/en estas navidades.mp3";
import unOsitoDormilon from "../../assets/music/un osito dormilon.mp3";
import elBurritoDeBelén from "../../assets/music/El burrito de Belen.mp3";
import laNanitaNana from "../../assets/music/La Nanita Nana.mp3";
import anton from "../../assets/music/anton.mp3";
import tutaina from "../../assets/music/tutaina.mp3";
import campanaSobreCampana from "../../assets/music/Campana Sobre Campana.mp3";
*/

import imgChucuChucu from "../../assets/images/genres/chucu_chucu.jpg";
import imgCumbiaNavideña from "../../assets/images/genres/cumbia_navideña.jpg";
import imgSalsaNavideña from "../../assets/images/genres/salsa_navideña.jpg";
import imgVallenatoNavideño from "../../assets/images/genres/vallenato_navideño.jpg";
import imgVillancicosTropicales from "../../assets/images/genres/villancicos_tropicales.jpg";
import imgRadio from "../../assets/images/genres/radio_navideña.jpg";

import left_arrow from "../../assets/icons/left_arrow.png";
import right_arrow from "../../assets/icons/right_arrow.png";
import prev from "../../assets/icons/prev.png";
import next from "../../assets/icons/next.png";
import play from "../../assets/icons/play.png";
import pause from "../../assets/icons/pause.png";
import shuffle from "../../assets/icons/shuffle.png";
import volumen from "../../assets/icons/volume.png";


export const icons = {
    left_arrow,
    right_arrow,
    prev,
    next,
    play,
    pause,
    shuffle,
    volumen,
}


export interface Playlist{
    id_lista : string;
    nombre: string;
    fecha_creacion: string;
    tematica: string;
    
    desc: string;
    image: string;
}

export interface Song {
    id_cancion: number;
    nombre: string;
    artista: string[];
    url_audio: string;
    genero: string;

    image: string;
    duration: string;
}

export const Lista_Canciones: Playlist[] = [
    {
        id_lista:'1',
        nombre: 'Chucu Chucu',
        fecha_creacion: '2025-01-01',
        tematica: "Chucu-Chucu",
        desc: "Ritmo tropical colombiano con influencias de la cumbia y el porro,",
        image : imgChucuChucu
    },
    {
        id_lista:'2',
        nombre: 'Cumbia Navideña',
        fecha_creacion: '2025-01-01',
        tematica: "Cumbia-Navideña",
        desc: "Cumbia festiva con letras y melodías que celebran la Navidad y la alegría familiar.",
        image : imgCumbiaNavideña
    },
    {
        id_lista:'3',
        nombre: 'Salsa Navideña',
        fecha_creacion: '2025-01-01',
        tematica: "Salsa-Navideña",
        desc:"Salsa con temática navideña, combinando ritmo caribeño y mensajes de unión y celebración.",
        image : imgSalsaNavideña
    },
    {
        id_lista:'4',
        nombre: 'Vallenato Navideño',
        fecha_creacion: '2025-01-01',
        tematica: "Vallenato-Navideño",
        desc:"Vallenato con letras inspiradas en la Navidad, manteniendo su esencia alegre y sentimental.",
        image : imgVallenatoNavideño
    },
    {
        id_lista:'5',
        nombre: 'Villancicos Tropicales',
        fecha_creacion: '2025-01-01',
        tematica:"Villancicos-Tropicales",
        desc:"Versión bailable de los villancicos clásicos con fusiones de ritmos latinos.",
        image : imgVillancicosTropicales
    },
    {
        id_lista:'6',
        nombre: 'Radio Navideña',
        fecha_creacion: '2025-01-01',
        tematica: "Radio-Navideña",
        desc:"Mezcla aleatoria de todos estos géneros para ambientar las fiestas con alegría.",
        image : imgRadio
    }
]

export const cancion: Song[] = [
    {
        id_cancion: 1,
        genero: "Chucu-Chucu",
        nombre: 'Cariñito',
        artista: ['Rodolfo Aicardi'],
        url_audio: cariñito,
        duration: '3:45',
        image : imgChucuChucu
    },
    {
        id_cancion: 2,
        genero:  "Chucu-Chucu",
        nombre: 'El hijo de tuta',
        artista: ['Lisandro Meza'],
        url_audio: elHijoDeTuta,
        duration: '4:03',
        image : imgChucuChucu
    },
    {
        id_cancion: 3,
        genero:  "Chucu-Chucu",
        nombre: 'El polvorete',
        artista: ['Lisandro Meza'],
        url_audio: elPolvorete,
        duration: '3:54',
        image : imgChucuChucu
    },
    {
        id_cancion: 4,
        genero:  "Chucu-Chucu",
        nombre: 'La chica gomela',
        artista: ['Los tupamaros'],
        url_audio: laChicaGomela,
        duration: '2:17',
        image : imgChucuChucu
    },
    {
        id_cancion: 5,
        genero:  "Chucu-Chucu",
        nombre: 'Los sabanales',
        artista: ['Los corraleros de majagual'],
        url_audio: losSabanales,
        duration: '2:38',
        image : imgChucuChucu
    },
    {
        id_cancion: 6,
        genero:  "Chucu-Chucu",
        nombre: 'Parranda en el cafetal',
        artista: ['Jorge Celedón'],
        url_audio: parrandaEnElCafetal,
        duration: '4:10',
        image : imgChucuChucu
    },
    {
        id_cancion: 1,
        genero: "Cumbia-Navideña",
        nombre: 'Cantares de navidad',
        artista: ['Billos Caracas Boys'],
        url_audio: cantaresDeNavidad,
        duration: '2:54',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 2,
        genero: "Cumbia-Navideña",
        nombre: 'Año nuevo',
        artista: ['Billos Caracas Boys'],
        url_audio: añoNuevo,
        duration: '2:53',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 3,
        genero: "Cumbia-Navideña",
        nombre: 'Grito vagabundo',
        artista: ['La sonora dinamita'],
        url_audio: gritoVagabundo,
        duration: '3:03',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 4,
        genero: "Cumbia-Navideña",
        nombre: 'El hijo ausente',
        artista: ['Pastor López'],
        url_audio: elHijoAusente,
        duration: '2:53',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 5,
        genero: "Cumbia-Navideña",
        nombre: 'La pollera colorá',
        artista: ['Pedro Salcedo'],
        url_audio: laPolleraColorá,
        duration: '2:38',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 6,
        genero: "Cumbia-Navideña",
        nombre: 'Feliz NocheBuena',
        artista: ['Rodolfo Aicardi'],
        url_audio: felizNocheBuena,
        duration: '3:13',
        image: imgCumbiaNavideña
    },
    {
        id_cancion: 1,
        genero: "Salsa-Navideña",
        nombre: 'Bomba en Navidad',
        artista: ['Richie Ray & Bobby Cruz'],
        url_audio: bombaEnNavidad,
        duration: '5:36',
        image: imgSalsaNavideña
    },
    {
        id_cancion: 2,
        genero: "Salsa-Navideña",
        nombre: 'Aire de navidad',
        artista: ['Héctor Lavoe', 'Willie Colón'],
        url_audio: aireDeNavidad,
        duration: '4:05',
        image: imgSalsaNavideña
    },
    {
        id_cancion: 3,
        genero: "Salsa-Navideña",
        nombre: 'Alma Navideña',
        artista: ['Frukko y sus tesos'],
        url_audio: almaNavidena,
        duration: '4:21',
        image: imgSalsaNavideña
    },
    {
        id_cancion: 4,
        genero: "Salsa-Navideña",
        nombre: 'Pedro navaja',
        artista: ['Rubén Blades'],
        url_audio: pedroNavaja,
        duration: '4:47',
        image: imgSalsaNavideña
    },
    {
        id_cancion: 5,
        genero: "Salsa-Navideña",
        nombre: 'Amores Como el Nuestro',
        artista: ['Jerry Rivera'],
        url_audio: amoresComoElNuestro,
        duration: '5:00',
        image: imgSalsaNavideña
    },
    {
        id_cancion: 1,
        genero: "Vallenato-Navideño",
        nombre: 'Aguila Roja',
        artista: ['Café Aguila Roja'],
        url_audio: aguilaRoja,
        duration: '0:42',
        image: imgVallenatoNavideño

    },
    {
        id_cancion: 2,
        genero: "Vallenato-Navideño",
        nombre: 'Mensaje de Navidad',
        artista: ['Diomedes Díaz'],
        url_audio: mensajeDeNavidad,
        duration: '5:00',
        image: imgVallenatoNavideño
    },
    {
        id_cancion: 3,
        genero: "Vallenato-Navideño",
        nombre: 'Bendito diciembre',
        artista: ['Los Betos'],
        url_audio: benditoDiciembre,
        duration: '3:58',
        image: imgVallenatoNavideño
    },
    {
        id_cancion: 4,
        genero: "Vallenato-Navideño",
        nombre: '25 de diciembre',
        artista: ['Diomedes Díaz'],
        url_audio: veinticincoDeDiciembre,
        duration: '5:10',
        image: imgVallenatoNavideño
    },
    {
        id_cancion: 5,
        genero: "Vallenato-Navideño",
        nombre: 'En estas navidades',
        artista: ['Jairo Serrano'],
        url_audio: enEstasNavidades,
        duration: '3:46',
        image: imgVallenatoNavideño
    },
    {
        id_cancion: 6,
        genero: "Vallenato-Navideño",
        nombre: 'Un osito dormilon ',
        artista: ['Binomio de Oro'],
        url_audio: unOsitoDormilon,
        duration: '4:45',
        image: imgVallenatoNavideño
    },
    {
        id_cancion: 1,
        genero: "Villancicos-Tropicales",
        nombre: 'El burrito de belén',
        artista: ['Los niños cantores de navidad'],
        url_audio: elBurritoDeBelén,
        duration: '3:10',
        image: imgVillancicosTropicales
    },
    {
        id_cancion: 2,
        genero: "Villancicos-Tropicales",
        nombre: 'La nanita nana',
        artista: ['Los niños cantores de navidad'],
        url_audio: laNanitaNana,
        duration: '2:44',
        image: imgVillancicosTropicales
    },
    {
        id_cancion: 3,
        genero: "Villancicos-Tropicales",
        nombre: 'Anton',
        artista: ['Los niños cantores de navidad'],
        url_audio: anton,
        duration: '1:53',
        image: imgVillancicosTropicales
    },
    {
        id_cancion: 4,
        genero: "Villancicos-Tropicales",
        nombre: 'Tutaina',
        artista: ['Los niños cantores de navidad'],
        url_audio: tutaina,
        duration: '2:54',
        image: imgVillancicosTropicales
    },
    {
        id_cancion: 5,
        genero: "Villancicos-Tropicales",
        nombre: 'Campana sobre campana',
        artista: ['Los niños cantores de navidad'],
        url_audio: campanaSobreCampana,
        duration: '2:43',
        image: imgVillancicosTropicales
    },
    {
        id_cancion: 6,
        genero: "Villancicos-Tropicales",
        nombre: 'Peces en el Rio',
        artista: ['Los niños cantores de navidad'],
        url_audio: pecesEnElRio,
        duration: '2:12',
        image: imgVillancicosTropicales
    },
    

]
