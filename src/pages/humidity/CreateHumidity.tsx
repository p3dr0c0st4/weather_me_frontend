import React from 'react';
import { Button, Space } from 'antd';

import { useNavigate } from 'react-router-dom';

export default () => {
    const navigate = useNavigate();
    const onSaveClick = ()=>{

console.log('')
    }
    return (
        <Space direction="vertical">
            <Button  key='save' type='primary' onClick={onSaveClick}>
                Save
            </Button>
        </Space>
    );
};
