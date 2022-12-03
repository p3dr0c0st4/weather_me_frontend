import React  from 'react';
import { Button, Space } from 'antd';
import {useParams} from "react-router-dom";
import { updateItem } from '../../services/TemperatureService';


export default () => {

    const onUpdate = () =>{
        updateItem('123', {
            id: '12',
            location: 'casa',
            date:10,
            temperature: 20,
        })
    }

    const { id } = useParams();


    return (
        <Space direction="vertical">
            {id}
            <Button  key='update' type='default' onClick={onUpdate}>
                Update
            </Button>
        </Space>
    );
};
