import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import TemperaturePage from './pages/temperature/TemperaturePage';
import HumidityPage from './pages/humidity/HumidityPage';
import LoginPage from './pages/login/LoginPage';
import CreateTemperature from './pages/temperature/CreateTemperature';
import UpdateTemperature from './pages/temperature/UpdateTemperature';
import CreateHumidity from './pages/humidity/CreateHumidity';
import UpdateHumidity from './pages/humidity/UpdateHumidity';

export default () => {
    return (
        <Layout>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/temperature" element={<TemperaturePage />} />
                    <Route path="/temperature/create" element={<CreateTemperature />} />
                    <Route path="/temperature/update/:id" element={<UpdateTemperature />} />
                    <Route path="/humidity" element={<HumidityPage />} />
                    <Route path="/humidity/create" element={<CreateHumidity />} />
                    <Route path="/humidity/update/:id" element={<UpdateHumidity />} />
                    <Route path="/login" element={<LoginPage />} />

                </Routes>
            </BrowserRouter>
        </Layout>
    );
};
