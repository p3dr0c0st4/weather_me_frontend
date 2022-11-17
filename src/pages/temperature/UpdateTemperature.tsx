import React from 'react';
import CreateForm from './../../components/CreateForm';
import DeleteButton from './../../components/crudButtons/DeleteButton';
import UpdateButton from './../../components/crudButtons/UpdateButton';

export default () => {
    return (
        <div className="update-container">
            <div className="idAndDelete-container">
                <h2>to render ID</h2>
                <div className="deleteButton-container">
                    <DeleteButton />
                </div>
            </div>

            <div className="createForm-container">
                <CreateForm />
            </div>
            <div className="updateButton-container">
                <UpdateButton />
            </div>
        </div>
    );
};
