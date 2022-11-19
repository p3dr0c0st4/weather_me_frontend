import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';

export default () => {
    return (
        <Row>
            <Col flex="auto">
                <Menu theme="dark" mode="horizontal">
                        <Menu.Item key={'weatherMe'} >
                            <Link to="/">WeatherMe</Link>
                        </Menu.Item>

                        <Menu.Item key={'temperature'}>
                            <Link to="/temperature">Temperature</Link>
                        </Menu.Item>

                        <Menu.Item key={'humidity'}>
                            <Link to="/humidity">Humidity</Link>
                        </Menu.Item>

                        <Menu.Item key={'login'} style={{ position:'absolute', right:'0px', width:'10%', textAlign:'center'}} >
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};
