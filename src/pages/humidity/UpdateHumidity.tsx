import { Button } from 'antd';
import React from 'react';
import CreateForm from './../../components/CreateForm';

export default () => {
    return (
        <div className="update-container">
            <div className="idAndDelete-container">
                <h2>to render ID</h2>
                <div className="deleteButtonElement-container">
                    <Button  key='delete' type='ghost'>
                        Delete
                    </Button>
                </div>
            </div>

            <div className="createForm-container">
                <CreateForm />
            </div>
            <div className="updateButtonElement-container">
            <Button  key='update' type='default'>
                Update
            </Button>
            </div>
        </div>
    );
};
