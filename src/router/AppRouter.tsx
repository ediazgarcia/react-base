import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '@/components/layout';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

// Carga diferida (lazy loading) de las páginas
const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard'));

export const AppRouter: React.FC = () => {
    return (
        <>
            {/* Navbar and Header global */}
            <Header />
            <Navbar />

            {/* Contenedor principal */}
            <div style={{ padding: '20px', minHeight: 'calc(100vh - 200px)' }}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {/* Rutas públicas */}
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route path="/" element={<Home />} />

                        {/* Rutas privadas */}
                        <Route
                            path="/dashboard"
                            element={
                                <PrivateRoute>
                                    <Dashboard />
                                </PrivateRoute>
                            }
                        />

                        {/* Redirección */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </Suspense>
            </div>

            {/* Footer global */}
            <Footer />
        </>
    );
};