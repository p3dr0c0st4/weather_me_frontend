import React from "react";
import { Button } from 'antd';


class CreateButton extends React.Component {

    render () {

        return (
            <Button type="primary" key={"create"}>Create</Button>
        )
    }
}

export default CreateButton;