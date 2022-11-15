import React from 'react';
import CreateForm from '../Components/common/CreateForm';
import DeleteButton from '../Components/common/crudButtons/Delete';
import UpdateButton from '../Components/common/crudButtons/Update';


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
