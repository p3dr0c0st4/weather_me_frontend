import React, {useState} from 'react';
import TemperatureList from './TemperatureList';
import CreateContainer from './CreateContainer'
import UpdateContainer from './UpdateContainer';


class MainPage extends React.Component {

    
 
    render() {
        // const [active, setAtive] = useState("temperatureList");

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
}

export default MainPage;