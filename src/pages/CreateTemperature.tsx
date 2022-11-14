import { Space } from 'antd';
import React from 'react';
import CreateForm from '../components/common/CreateForm';
import SaveButton from '../components/common/crudButtons/Save';


export default () => {
    
        return (

            <Space direction='vertical'>
                
                <CreateForm/>    
                <SaveButton/>

            </Space>
        )
    
}