import React from 'react';
import TemperatureList from './TemperatureList';
import CreateContainer from './CreateTemperature'
import UpdateContainer from './UpdateContainer';


export default () => {      

        return (
            <div className='mainPage-component'>
                <TemperatureList />
                <p>----</p>
                <CreateContainer />
                <p>----</p>
                <UpdateContainer />
            </div>
        );
    
}

