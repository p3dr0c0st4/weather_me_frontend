import React from 'react';
import './styles/temperatureList.css';
import ContainerList from '../common/ContainerList';
import CreateButton from '../common/crudButtons/Create';


class TemperatureList extends React.Component {
    render() {

        return (
            <div className='temperature-list' typeof='Component'>
                <h1>Temperature or Humidity</h1>
                <div className='createButton-container'>
                    <CreateButton key={'create'} />
                </div>

                <ContainerList />
            </div>
        )
    }
}

export default TemperatureList;