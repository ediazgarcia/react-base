import React from 'react';
import { useAuthStore } from '@/store';

export const Login: React.FC = () => {
    const { login } = useAuthStore();

    const handleLogin = () => {
        login(); // Cambia el estado global de autenticación
        window.location.href = '/dashboard';
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Iniciar Sesión</button>
        </div>
    );
};

export default Login;
