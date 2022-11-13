import React from 'react';
import '../../styles/App.css'

import { Layout, Menu } from 'antd';

const { Header } = Layout;


  function HeaderComponent () { 
    return(
      <div className='header-container' typeof='Component'>
             <Header id='header-container'>
                 <div className="logo" />
                 <Menu theme="dark"
                    mode="horizontal"
                    id="headers-menu">

                    <Menu.Item id='temperature' key={1}>Temperature</Menu.Item>
                    <Menu.Item id='humidity' key={2}>Humidity</Menu.Item>
                    <Menu.Item id='login' key={3}>Login</Menu.Item>
                </Menu>
            </Header>
        </div>
    )
  }

export default HeaderComponent