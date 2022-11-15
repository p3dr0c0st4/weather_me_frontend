import { Space } from 'antd';
import React from 'react';
import CreateForm from '../Components/common/CreateForm';
import SaveButton from '../Components/common/crudButtons/Save';


export default () => {
    
        return (

            <Space direction='vertical'>
                
                <CreateForm/>    
                <SaveButton/>

            </Space>
        )
    
}