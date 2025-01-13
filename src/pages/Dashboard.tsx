import React from 'react';
import { useAuthStore } from '@/store';

export const DashboardPage: React.FC = () => {
    const { logout } = useAuthStore();

    const handleLogout = () => {
        logout();
        window.location.href = '/login';
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bienvenido al área privada</p>
            <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default DashboardPage;
