import React from 'react';
import { Button, Space } from 'antd';
import CreateForm from './../../components/CreateForm';
import { useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const onSaveClick = ()=>{

console.log('')
    }
    return (
        <Space direction="vertical">
            <CreateForm />
            <Button  key='save' type='primary' onClick={onSaveClick}>
                Save
            </Button>
        </Space>
    );
};
