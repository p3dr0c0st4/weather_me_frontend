import React  from 'react';
import axios from 'axios';
import CreateForm from './../../components/CreateForm';
import { Button, Space } from 'antd';
import {useParams} from "react-router-dom";






export default () => {


    const { id } = useParams();

    // const [temperature, setTemperature] = useState({});
    // const temp = temperature

    const onUpdate =  ()=>{
         axios.patch(`/temperature/update/${id}`)
        .then(res => {
            console.log('responseLog');
            return res.data;
            console.log(res.data);
        })
        .catch(err => {
            console.log('errorLog: '+err)
        })
        
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
