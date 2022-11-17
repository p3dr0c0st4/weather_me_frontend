import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Col, Row } from 'antd';

export default () => {
    return (
        <Row>
            <Col flex="auto">
                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key={1}>
                        <Link to="/">WeatherMe</Link>
                    </Menu.Item>
                    <Menu.Item key={2}>
                        <Link to="/temperature">Temperature</Link>
                    </Menu.Item>
                    <Menu.Item key={3}>
                        <Link to="/humidity">Humidity</Link>
                    </Menu.Item>
                    <Menu.Item key={4}>
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
};
