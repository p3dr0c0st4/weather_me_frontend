import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import TemperaturePage from './pages/temperature/TemperaturePage';
import HumidityPage from './pages/humidity/HumidityPage';
import LoginPage from './pages/login/LoginPage';


export default () => {
    return (
        <Layout>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/temperature" element={<TemperaturePage />} />
                    <Route path="/humidity" element={<HumidityPage />} />
                    <Route path="/login" element={<LoginPage />} />

                </Routes>
            </BrowserRouter>
        </Layout>
    );
};
