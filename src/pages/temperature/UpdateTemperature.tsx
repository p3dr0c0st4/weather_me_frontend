import { Button, Space } from 'antd';
import React from 'react';
import CreateForm from './../../components/CreateForm';
import {useParams} from "react-router-dom";

export default () => {
    const { id } = useParams();
    const onUpdate=()=>{
        //TODO: call API with id to update
        console.log('UPDATED', id)
    }
    return (
        <Space direction="vertical">
            {id}
            <CreateForm />
            <Button  key='update' type='default' onClick={onUpdate}>
                Update
            </Button>
        </Space>
    );
};
