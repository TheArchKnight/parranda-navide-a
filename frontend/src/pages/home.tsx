import * as React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Novenas from '../components/Novenas';
import Navbar from '../components/Navbar';
import Recetas from '../components/Recetas';
import Rituales from '../components/rituales';
import Biblioteca from '../components/Biblioteca';
import PlayerContextProvider from '../contexts/PlayerContextProvider';
import GestionPerfil from '../components/GestionPerfil';
import imgProfile from "../assets/images/perfil-defecto.png"; // Imagen de perfil por defecto

const Home: React.FC = () => {
    const { user, logout } = useAuth();
    const navItems = [
        {
            name: 'Pefil',
            component: <GestionPerfil/>
        },
        {
            name: 'Novenas',
            component: <Novenas />,
        },
        {
            name: 'Recetas',
            component: <Recetas />,
        },
        {
            name: 'Rituales',
            component: <Rituales />,
        },
        {
            name: 'Musica Navideña',
            component: (
                <PlayerContextProvider>
                    <Biblioteca></Biblioteca>
                </PlayerContextProvider>
            )
        },
    ];

    return (
        <>
            <Navbar 
                nickname={user?.name || ''}
                profileImage={imgProfile /*user?.photo */ } 
                navItems={navItems} 
                onLogout={logout}
            />
            
        </>
    );
};

export default Home;