import React from 'react';
import CreateForm from '../components/common/CreateForm';
import DeleteButton from '../components/common/crudButtons/Delete';
import UpdateButton from '../components/common/crudButtons/Update';


export default () => {
        return (
            <div className='update-container'>

                <div className='idAndDelete-container'>

                <h2>to render ID</h2>
                <div className='deleteButton-container'><DeleteButton/></div>
                
                </div>

                <div className='createForm-container'><CreateForm/></div>   
                <div className='updateButton-container'><UpdateButton/></div>
                
            </div>
        )
    
}
