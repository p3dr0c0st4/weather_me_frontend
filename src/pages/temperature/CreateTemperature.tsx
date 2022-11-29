import React from 'react';
import { Button, Space } from 'antd';
import CreateForm from './../../components/CreateForm';
import axios from 'axios';

export default () => {
    const onSaveClick =  ()=>{
        
        //TODO: call api with create
        console.log('CREATE')
         axios.get(`http://localhost:3000/temperature/create`)
                .then(res => {
                    console.log('responseLog');
                    return res.data;
                    console.log(res.data);
                })
                .catch(err => {
                    console.log('errorLog: '+err)
                })
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
