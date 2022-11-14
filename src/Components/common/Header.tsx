import React from 'react';

import { Layout, Menu } from 'antd';

const { Header } = Layout;


  const HeaderComponent = () => { 
    return(
      
             <Header id='header-container'>
                 
                 <Menu theme="dark"
                    mode="horizontal"
                    id="headers-menu">

                    <Menu.Item id='temperature' key={1}>Temperature</Menu.Item>
                    <Menu.Item id='humidity' key={2}>Humidity</Menu.Item>
                    
                    <Menu.Item id='login' key={3}>Login</Menu.Item>

                </Menu>
            </Header>
    )
  }

export default HeaderComponent