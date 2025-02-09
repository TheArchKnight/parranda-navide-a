import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/formComponents/Button';

const Home: React.FC = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <h1>Bienvenido a la Parranda Navideña</h1>
            <p>{user?.email}</p>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    );
};

export default Home;