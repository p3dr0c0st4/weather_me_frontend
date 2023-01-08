import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';

export default () => {
    const navigate = useNavigate();
    const onMainClick =()=>{
        navigate('/');
    }
    const onTemperatureClick=()=>{
        navigate('/temperature');
    }
    const onHumidityClick=()=>{
        navigate('/humidity');
    }
    const onLoginlick=()=>{
        navigate('/login');
    }

    const items = [
        { label: 'WeatherMe', key: 'weathermeHeader', onClick: onMainClick }, // remember to pass the key prop
        { label: 'Temperature', key: 'temperatureHeader', onClick: onTemperatureClick }, // which is required
        { label: 'Humidity', key: 'humidityHeader', onClick: onHumidityClick},
    ];
    const loginItem = [
        {label: 'Login', key: 'loginHeader', onClick: onLoginlick}
    ]

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

