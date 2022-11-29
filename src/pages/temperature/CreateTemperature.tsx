import React from 'react';
import { Button, Space } from 'antd';
import CreateForm from './../../components/CreateForm';
import { create } from '../../services/TemperatureService';

export default () => {
    return (
        <Space direction="vertical">
            <CreateForm />
            <Button  key='save' type='primary' onClick={create}>
                Save
            </Button>
        </Space>
    );
};
