import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Novenas from '../components/Novenas';
import Navbar from '../components/Navbar';
import Recetas from '../components/Recetas';

const Home: React.FC = () => {
    const { user, logout } = useAuth();
    const navItems = [
        {
            name: 'Novenas',
            component: <Novenas />,
        },
        {
            name: 'Recetas',
            component: <Recetas />,
        },

    ];

    return (
        <>
        <Navbar 
            nickname={user?.name || ''} 
            navItems={navItems} 
            onLogout={logout}
        />
        </>
    );
};

export default Home;