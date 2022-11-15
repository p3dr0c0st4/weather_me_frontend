import React from 'react';
import 'antd/dist/antd.css';
import './styles/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderComponent from './Components/common/Header';
import MainPage from './pages/MainPage';
import TemperaturePage from './pages/TemperaturePage';

const { Content, Footer } = Layout;

const App: React.FC = () => (

  <Layout>
      <BrowserRouter>
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/temperature" element={<TemperaturePage />} />
        {/* <Route path="/humidity" element={<HumidityPage />} /> */}
      </Routes>
    </BrowserRouter>


  </Layout>
);

export default App;