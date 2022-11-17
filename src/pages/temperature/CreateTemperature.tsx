import React from 'react';
import { Space } from 'antd';
import CreateForm from './../../components/CreateForm';
import SaveButton from './../../components/crudButtons/SaveButton';

export default () => {
    return (
        <Space direction="vertical">
            <CreateForm />
            <SaveButton />
        </Space>
    );
};
