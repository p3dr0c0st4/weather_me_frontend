import React from 'react';
import 'antd/dist/antd.css';
import './styles/index.css';


import { Layout } from 'antd';
import HeaderComponent from './components/common/Header';
import MainPage from './pages/MainPage';

const { Content, Footer } = Layout;

const App: React.FC = () => (

  <Layout className="layout">
    <HeaderComponent/>

    <Content style={{ padding: '1.8% 3%' }}>

      <MainPage />  

    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default App;