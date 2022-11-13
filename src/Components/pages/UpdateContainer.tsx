import React from 'react';
import './styles/updateContainer.css';
import CreateForm from '../common/CreateForm';
import DeleteButton from '../common/crudButtons/Delete';
import UpdateButton from '../common/crudButtons/Update';


class UpdateContainer extends React.Component {
    render () {
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
}


export default UpdateContainer;