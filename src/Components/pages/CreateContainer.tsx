import React from 'react';
import './styles/createContainer.css';
import CreateForm from '../common/CreateForm';
import SaveButton from '../common/crudButtons/Save';



class CreateContainer extends React.Component {
    render () {
        return (
            <div className='create-container'>
                <h1>Temperature or Humidity #WIP#</h1>
                <div className='createForm-container'><CreateForm/></div>    
                <div className='saveButton-container'><SaveButton/></div>
            </div>
        )
    }
}


export default CreateContainer;