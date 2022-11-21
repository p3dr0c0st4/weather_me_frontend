import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';


const items = [
    { label: 'WeatherMe', key: 'weatherme' }, // remember to pass the key prop
    { label: 'Temperature', key: 'temperature' }, // which is required
    { label: 'Humidity', key: 'humidity'},
    
  ];
  const loginItem = [
    {label: 'Login', key: 'login'}
  ]


export default () => {
    return (
        <Row>
            <Col span={23} >
                <Menu theme="dark" mode="horizontal" items={items} />
            </Col>
            <Col span={1} >
                <Menu theme="dark" mode="horizontal" items={loginItem} />
            </Col>
        </Row>
    );
};

// <Link to="/login">Login</Link>
