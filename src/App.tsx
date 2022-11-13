import React from 'react';
import 'antd/dist/antd.css';
import './styles/index.css';
import { Layout } from 'antd';
import HeaderComponent from './Components/common/Header';
import TemperatureList from './Components/pages/TemperatureList';
import CreateContainer from './Components/pages/CreateContainer'
import UpdateContainer from './Components/pages/UpdateContainer';

const { Content, Footer } = Layout;

const App: React.FC = () => (

  <Layout className="layout">
    <HeaderComponent/>

    <Content style={{ padding: '1.8% 3%' }}>
      <div className="site-layout-content">Content</div>
      <TemperatureList/>
      <p>----</p>
      <CreateContainer/>
      <p>----</p>
      <UpdateContainer/>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);

export default App;