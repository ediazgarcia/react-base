import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store';

interface Props {
    children: JSX.Element;
}

export const PublicRoute: React.FC<Props> = ({ children }) => {
    const { isAuthenticated } = useAuthStore();

    return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};
