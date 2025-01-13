import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '@/store';

export const Navbar: React.FC = () => {
    const { isAuthenticated, logout } = useAuthStore();

    return (
        <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#122731', color: '#fff' }}>
            <Link to="/">Home</Link>
            {isAuthenticated ? (
                <>
                    <Link to="/dashboard">Dashboard</Link>
                    <button onClick={logout} style={{ marginLeft: 'auto', color: 'red' }}>
                        Logout
                    </button>
                </>
            ) : (
                <Link to="/login" style={{ marginLeft: 'auto' }}>
                    Login
                </Link>
            )}
        </nav>
    );
};
